const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    cus_id: { type: String, required: true },
    user_email: { type: String, unique: true, required: true },
    user_password: { type: String, required: true, default: "123" },
    active: { type: Boolean, required: true, default: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
