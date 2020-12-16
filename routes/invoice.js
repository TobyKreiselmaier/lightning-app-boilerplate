var express = require('express');
var router = express.Router();
const BTCPAY_PRIV_KEY = "dfcdc9dc3320e1d3721d2b384ba1cf841eb9c135d9b7a04760c48854e8963b49";
const BTCPAY_MERCHANT_KEY = "";

// Initialize the client
const btcpay = require('btcpay')
const keypair = btcpay.crypto.load_keypair(new Buffer.from(BTCPAY_PRIV_KEY, 'hex'));
const client = new btcpay.BTCPayClient('https://lightning.filipmartinsson.com', keypair, {merchant: BTCPAY_MERCHANT_KEY})


/* get & verify invoice. */
router.get('/:id', async function(req, res, next) {

});

/* Create invoice. */
router.post('/', function(req, res, next) {

});


module.exports = router;
