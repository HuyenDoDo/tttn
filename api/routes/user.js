const User = require("../models/User");
const Customer = require("../models/Customer");

const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();

// //get toàn bộ user
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  //query <=> dấu ? trên địa chỉ
  const query = req.query.new; //new là key đứng sau ?. Trong ví dụ này, ?new=true là lấy ra 5 user đầu tiên và sắp giảm dần
  try {
    const result = query
      ? await User.find().sort({ id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get user stats
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.getFullYear() - 1);
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: { $month: "$createdAt" },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

// //get toàn bộ admin
// router.get("/admins", async (req, res)=>{
//     try {
//         const result = await User.find({role_id: "625d23c1e23f7de432ac5ff7"});
//         res.status(200).json(result)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// //get toàn bộ admin
// router.get("/customers", async (req, res)=>{
//     try {
//         const result = await User.find({role_id: "625d23d1e23f7de432ac5ff9"});
//         res.status(200).json(result)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

//get 1 user, chỉ có admin mới get dc user
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { user_password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

//cập nhật user
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //nếu user có yêu cầu thay đổi password thì băm nó
  if (req.body.user_password) {
    req.body.user_password = CryptoJS.SHA1(req.body.user_password).toString();
    //res.send("có pass");
  }
  // res.json(req.body);

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    const updatedCustomer = await Customer.findByIdAndUpdate(
      updatedUser.cus_id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ updatedUser, updatedCustomer });
  } catch (err) {
    res.status(500).json(err);
  }
});

//xóa 1 user
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Tài khoản này đã được xóa!!!");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
