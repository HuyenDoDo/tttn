const router = require("express").Router();
const Product = require("../models/Product");
const Category = require("../models/Category");
const { verifyTokenAndAdmin } = require("./verifyToken");

//tạo 1 sản phẩm mới
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newPro = new Product(req.body);

  try {
    const savedPro = await newPro.save();
    res.status(200).json(savedPro);
  } catch (error) {
    res.status(500).json(error);
  }
});

//cập nhật 1 danh mục
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedPro = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPro);
  } catch (error) {
    res.status(500).json(error);
  }
});

//xóa 1 danh mục
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Xóa danh mục này thành công");
  } catch (error) {
    res.status(500).json(error);
  }
});

//get 1 sản phẩm
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get tat ca san pham
router.get("/", async (req, res) => {
  //query <=> dấu ? trên địa chỉ
  const queryNew = req.query.new; //new là key đứng sau ?. Trong ví dụ này, ?new=true là lấy ra 5 user đầu tiên và sắp giảm dần

  const queryCategory = req.query.category;
  try {
    let products;

    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (queryCategory) {
      const getCate = await Category.findOne({ cate_title: queryCategory });
      products = await Product.find({
        cate_id: getCate._id,
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
