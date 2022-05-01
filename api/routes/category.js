const Category = require("../models/Category");

const router = require("express").Router();

//get All
router.get("/", async (req, res) => {
  const query = req.query.name;
  try {
    const result = await Category.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get All parents
router.get("/parents", async (req, res) => {
  try {
    const result = await Category.find({ parent_id: null });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// //get All childs in 1 parent
// router.get("/:id", async (req, res) => {
//   try {
//     const result = await Category.find({ parent_id: req.params.id });
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

//get All childs in 1 parent by title
router.get("/:title", async (req, res) => {
  try {
    const parent = await Category.find({ cate_title: req.params.title });
    const result = await Category.find({ parent_id: parent[0]._id });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

//tạo 1 danh mục mới
router.post("/", async (req, res) => {
  const newCate = new Category({
    parent_id: req.body.parent_id,
    cate_title: req.body.cate_title,
    cate_name: req.body.cate_name,
  });
  try {
    const savedCate = await newCate.save();
    res.status(200).json(savedCate);
  } catch (error) {
    res.status(500).json(error);
  }
});

// //cập nhật 1 danh mục
// router.put("/:id", verifyTokenAndAdmin, async (req,res)=>{
//     try {
//         const updatedCate = await Category.findByIdAndUpdate(
//             req.params.id,
//             {$set: req.body},
//             {new: true}
//         );
//         res.status(200).json(updatedCate);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// })

// //xóa 1 danh mục
// router.delete("/:id", verifyTokenAndAdmin, async (req,res)=>{
//     try {
//         await Category.findByIdAndDelete(req.params.id);
//         res.status(200).json("Xóa danh mục này thành công");
//     } catch (error) {
//         res.status(500).json(error);
//     }
// })

module.exports = router;
