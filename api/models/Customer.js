const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    cus_name: { type: String, required: true },
    cus_email: { type: String, unique: true, required: true },
    cus_phone: { type: String, required: true, default: "0987654321" },
    cus_adress: { type: String, required: true, default: "" },
    registerd: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", CustomerSchema);
