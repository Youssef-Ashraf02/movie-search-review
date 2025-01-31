const express = require("express");
const watchlistcontroller = require('../controllers/watchlistcontroller');
const router = express.Router();

/////watchlist
router.get('/mywatchlist', watchlistcontroller.getwatchlist);

router.post('/watchlist/add', watchlistcontroller.addtowatchlist);

module.exports=router;