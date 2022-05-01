const { json } = require("express");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  //lấy token trong header của req dc gửi
  const authHeader = req.headers.token;

  //chứng thực user
  if (authHeader) {
    // nếu có token thì chứng thực
    //vì authHeader trong header dc gửi có cấu trúc: Bearer token
    //nên phải split ra và lấy chuỗi phía sau
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token không hợp lệ!!!");
      req.user = user;
      next();
    });
  } else {
    //ko có thì báo lỗi
    return res.status(401).json("Bạn chưa xác thực!!!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, async () => {
    //nếu user trong token là customer thì ko thể truy cập id của admin dc
    //nếu user trong token là admin thì chỉ cần là admin thì có thể truy cập bất kỳ user nào
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Bạn không có quyền để thực hiện hành động này!!!");
    }
  });
};

//chỉ dành cho admin
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, async () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Bạn không có quyền để thực hiện hành động này!!!");
    }
  });
};
module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
