const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

receive = async function receiveMessage() {

    const provider = new HDWalletProvider(
      'hollow ramp mistake around fringe risk inject power chapter door barely ring',
      'https://rinkeby.infura.io/v3/816d3ae0c2c743a1ba5b96814bcb260d'
    );
    const web3 = new Web3(provider);    

    const instance = new web3.eth.Contract(
        JSON.parse('[{"constant":false,"inputs":[{"name":"newMessage","type":"string"}],"name":"setMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialMessage","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]'),
        '0x1D282820eDB8639abc8F7051eb8D88C5a67A10dF'
      );
      
      instance.setProvider(provider);
      const message = await instance.methods.message().call();
      console.log(message);
      alert(message);
  };

  write = async function writeMessage(message) {
    
    const provider = new HDWalletProvider(
      'hollow ramp mistake around fringe risk inject power chapter door barely ring',
      'https://rinkeby.infura.io/v3/816d3ae0c2c743a1ba5b96814bcb260d'
    );
    const web3 = new Web3(provider);

    accounts = await web3.eth.getAccounts();

    const instance = new web3.eth.Contract(
      JSON.parse('[{"constant":false,"inputs":[{"name":"newMessage","type":"string"}],"name":"setMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialMessage","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]'),
      '0x1D282820eDB8639abc8F7051eb8D88C5a67A10dF'
      );
      
      instance.setProvider(provider);

      await instance.methods.setMessage(message+'').send({
        from: accounts[0],
        gas: '1000000'
      });
      console.log(message+'');
  };