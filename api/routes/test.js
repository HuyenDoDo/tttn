const router = require('express').Router();
const Test = require('../models/Test');

router.post('/', async (req, res)=>{
    const newTest = new Test({
        name: req.body.name,
        thumbnail: req.body.thumbnail,
        img: req.body.img,
    });
    try {
        const savedTest = await newTest.save();
        res.status(200).json(savedTest);       
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;