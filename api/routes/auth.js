const router = require("express").Router();
const User = require("../models/User");
const Customer = require("../models/Customer");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Sign in
router.post("/register", async (req, res) => {
  const newCustomer = new Customer({
    cus_name: req.body.cus_name,
    cus_email: req.body.cus_email,
    cus_phone: req.body.cus_phone,
    cus_adress: req.body.cus_adress,
    registerd: true,
  });
  try {
    const savedCustomer = await newCustomer.save();
    const newUser = new User({
      cus_id: savedCustomer._id,
      user_email: savedCustomer.cus_email,
      user_password: CryptoJS.SHA1(req.body.user_password).toString(),
      active: req.body.active,
      isAdmin: req.body.isAdmin,
    });
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ user_email: req.body.user_email });

    !user.active && res.status(401).json("tài khoản của bạn đã bị khóa!!!");

    //nếu tìm ko thấy thì báo sai email
    !user && res.status(401).json("wrong email!!!");

    //băm password trong body request dc gửi
    const hashedPassword = CryptoJS.SHA1(req.body.user_password).toString();

    //nếu password dc băm của đối tượng !== password dc băm trong body của request thì báo sai mật khẩu
    user.user_password !== hashedPassword &&
      res.status(401).json("wrong password!!!");

    //mỗi khi đăng nhập sẽ tạo ra token, token này chứa id và vai trò  của user
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" } //thời hạn trong 3 ngày
    );
    const { user_password, ...others } = user._doc; //user được lưu trong _doc
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
