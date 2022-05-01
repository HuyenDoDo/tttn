const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
    name : {type : String},
    images: {type : Array, required : true, default: ''},
},{timestamps : true});

module.exports = mongoose.model("Test", TestSchema);