const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    cate_id: { type: String, required: true },
    pro_name: { type: String, required: true },
    pro_desc: { type: String, required: true, default: "" },
    pro_price: { type: Number, required: true, default: 0 },
    in_stock: { type: Number, required: true, default: 0 },
    made_in: { type: String, required: true, default: "" },
    manufacturer: { type: String, required: true, default: "" },
    image: { type: String, required: true, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
