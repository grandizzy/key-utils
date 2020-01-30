var ethers = require('ethers')
var argv = require('minimist')(process.argv.slice(2))

var wallet = new ethers.Wallet(argv.key)
wallet.encrypt(argv.password).then(function(json) { console.log(json) });
