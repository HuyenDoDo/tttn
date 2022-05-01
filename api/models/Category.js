const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    parent_id : {type : String},
    cate_title : {type : String , unique : true, required : true},
    cate_name : {type : String , unique : true, required : true}
},{timestamps : true});

module.exports = mongoose.model("Category", CategorySchema);