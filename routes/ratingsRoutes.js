const express = require("express");
const ratingscontroller = require('../controllers/ratingscontroller');
const router = express.Router();

router.get('/myratings', ratingscontroller.getratings);

router.post('/myratings/add', ratingscontroller.addratings);

module.exports=router;