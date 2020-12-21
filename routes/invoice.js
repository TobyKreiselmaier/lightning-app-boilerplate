var express = require('express');
var router = express.Router();
const BTCPAY_PRIV_KEY = "dfcdc9dc3320e1d3721d2b384ba1cf841eb9c135d9b7a04760c48854e8963b49";
const BTCPAY_MERCHANT_KEY = "DRuJwNbFwSvPGYZma79hqo1mdjmtrQDjdBFUkB6yfBLL";

// Initialize the client
const btcpay = require('btcpay')
const keypair = btcpay.crypto.load_keypair(new Buffer.from(BTCPAY_PRIV_KEY, 'hex'));
const client = new btcpay.BTCPayClient('https://lightning.filipmartinsson.com', keypair, {merchant: BTCPAY_MERCHANT_KEY})


/* get & verify invoice. */
router.get('/:id', async function(req, res, next) {

});

/* Create invoice. */
router.post('/', function(req, res, next) {
    var dollarAmount = req.body.amount;
    //create invoice
    client.create_invoice({price: dollarAmount, currency: 'USD'})
    //many more parameters can be send (see docs)
    .then(invoice => {
        res.render('invoice', {invoiceId: invoice.id})
    })
    .catch(err => console.log(err));
});

module.exports = router;