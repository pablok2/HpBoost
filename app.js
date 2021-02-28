const Web3 = require('web3');

const sendHp = () => {
    let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

    web3.eth.sendTransaction({from: '0x12344321', data: '0x43211234'})
    .once('sending', function(payload){ console.log('sending ' + payload); })
    .once('sent', function(payload){ console.log('sent ' + payload); })
    .once('transactionHash', function(hash){ console.log('transactionHash ' + hash); })
    .once('receipt', function(receipt){ console.log('receipt ' + receipt); })
    .on('confirmation', function(confNumber, receipt, latestBlockHash){ console.log('confNumber ' + confNumber + ' receipt ' + receipt + ' latestBlockHash ' + latestBlockHash); })
    .on('error', function(error){ console.log('error ' + error); })
    .then(function(receipt){
        // will be fired once the receipt is mined
        console.log('receipt ' + receipt);
    });
};

console.log('Hello World');
sendHp();