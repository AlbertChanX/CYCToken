var lightwallet = require("eth-lightwallet");
// var keystore = lightwallet.keystore

function getWallet(password) {

    // generate a new BIP32 12-word seed
    var seed = lightwallet.keystore.generateRandomSeed();
    // console.log(lightwallet)
    lightwallet.keystore.deriveKeyFromPasswordAndSalt(password, function(err, pwDerivedKey) {

	    var keystore = new lightwallet.keystore(seed, pwDerivedKey);
	    keystore.generateNewAddress(pwDerivedKey);

	    console.log(keystore.getAddresses()[0])

	    var sendingAddr = keystore.getAddresses()[0];
	    console.log(sendingAddr);

     });
    }

getWallet("12345");