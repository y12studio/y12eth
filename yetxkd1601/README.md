### YETXKD1601

Y12 Ethereum Testnet X Kingdom Dollar 1601

### INSTALL

```
$ npm install -g ethereumjs-testrpc
$ npm install -g truffle
$ cd yetxkd1601
$ truffle init
$ testrpc -s 1234 &
EthereumJS TestRPC v2.0.2

Available Accounts
==================
(0) 0xc02345a911471fd46c47c4d3c2e5c85f5ae93d13
(1) 0x584830626d9dffa617f0e060c35dcc81400c1d98
(2) 0xe1da0c7e5313efa984e7b62408188c6cf8bece3d
(3) 0x2afca7da74b8805d771fa36869cfeb84d82dbb0f
(4) 0xac21945e2cd9115c7de8900c2cf5f1bc4a976a0e
(5) 0xd89c57dfa08534d243fc2432ae42a3ac181bad86
(6) 0xf84f94df3bf3657865ee3118c4694c1462bb3c51
(7) 0x7b3b27ec073e025000dabb5036cab357239410d0
(8) 0x70441be0f7dd29d8dce2ad9ef24126962cb0183d
(9) 0x984d6f30ce00c80dd51daa911b66d379f7710912

Private Keys
==================
(0) 1c1a965a9fb6beb254bafa72588797b0268f43783cffbfa41659f47ae77a3529
(1) 38094128816c1c416b15ee1b6b2ea443a044c99a1d47fd3dedfd9b169dac9b41
(2) aef70a1957bec1335d56d0e07df0af783802b5c0ec2f3e9cddfe912a8d71020b
(3) 8ba892b692061d9dd683634783971c252e7a7e3085d82b93e84e7c7565024461
(4) ce62299ab66781ffb7496e0e9536e94eb5ea2a818d2bbfa7423af4e8f108b339
(5) 910a38a368eddf8b182d6e3c47bd03f612f6015da85c74b21ef0f200dc119433
(6) 940d45d389bd24e656c7987158386408cd2b64205477670e6999e91246e13810
(7) f65b44887f262310c87debb1fd236fb0f60ead5b74ac6a11b2aeaa32f286ef0a
(8) 12bb5049f117d2ae5aed7828598abf3ce4ae74c83c2741f5c0bba1c2d7524a35
(9) cbf0d3ba6be2397fd729965ac2b18a0d96c26fb9ce64fdadb296a16f7c6d6511

HD Wallet
==================
Mnemonic:      feature stage install cover unique chef end venture twice sausage grace pink
Base HD Path:  m/44'/60'/0'/0/{account_index}

Listening on localhost:8545

$ truffle test

Using environment test.
eth_accounts
Compiling contracts...
evm_snapshot
Saved snapshot #1


  Contract: MetaCoin
eth_accounts
eth_sendTransaction

  Contract created: 0x5eceb671884153e2e312f8c5ae8e38fdc473c18d
  Gas usage: 68142
  Block Number: 0x01

eth_getTransactionReceipt
eth_sendTransaction

  Contract created: 0x20e8a23a99c26334aed05051d6e5c6cdf50d63f6
  Gas usage: 160750
  Block Number: 0x02

eth_getTransactionReceipt
evm_snapshot
Saved snapshot #2
eth_blockNumber
eth_call
    ✓ should put 10000 MetaCoin in the first account (58ms)
eth_blockNumber
eth_call
eth_call
    ✓ should call a function that depends on a linked library   (106ms)
eth_blockNumber
eth_call
eth_call
eth_sendTransaction

  Gas usage: 48544
  Block Number: 0x03

eth_getTransactionByHash
eth_call
eth_call
    ✓ should send coin correctly (216ms)

  3 passing (2s)

```

ConsenSys/truffle: A development framework for Ethereum
 https://github.com/ConsenSys/truffle

ethereumjs/testrpc: Fast Ethereum RPC client for testing and development
 https://github.com/ethereumjs/testrpc
