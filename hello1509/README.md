konradkonrad/docker-pyeth-cluster https://github.com/konradkonrad/docker-pyeth-cluster

JSON RPC · ethereum/wiki Wiki  https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getbalance

```
$ source alias.sh
$ dcup
$ miner1 bash

curl -X POST --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}' http://localhost:4000

{"jsonrpc": "2.0", "id": 1, "result": "0x5"}

curl -X POST --data '{"jsonrpc":"2.0","method":"eth_mining","params":[],"id":1}' http://localhost:4000

{"jsonrpc": "2.0", "id": 1, "result": true}

curl -X POST --data '{"jsonrpc":"2.0","method":"eth_hashrate","params":[],"id":1}' http://localhost:4000

{"jsonrpc": "2.0", "id": 1, "result": "0x110"}

curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' http://localhost:4000

{"jsonrpc": "2.0", "id": 1, "result": ["0xa158bf39c6a6e34d07fff9d97b6fdae6b5c81713"]}

curl -X POST --data '{"jsonrpc":"2.0","method":"eth_coinbase","params":[],"id":1}' http://localhost:4000

{"jsonrpc": "2.0", "id": 1, "result": "0xa158bf39c6a6e34d07fff9d97b6fdae6b5c81713"}

curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0xa158bf39c6a6e34d07fff9d97b6fdae6b5c81713", "latest"],"id":1}'  http://localhost:4000

{"jsonrpc": "2.0", "id": 1, "result": "0x0"}

curl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' http://localhost:4000

{"jsonrpc": "2.0", "id": 1, "result": "0x0"}

```

ethereum/client-go

```
$ docker pull ethereum/client-go
$ source alias.sh
$ dcup
$ docker ps
CONTAINER ID        IMAGE                COMMAND                  CREATED             STATUS              PORTS                                              NAMES
d7f4c0df8e81        ethereum/client-go   "/usr/bin/supervisord"   52 minutes ago      Up 52 minutes       0.0.0.0:8545->8545/tcp, 0.0.0.0:30303->30303/tcp   yeth1509_alice_1
$ gethc
instance: Geth/v0.9.39/linux/go1.4.2
 datadir: /root/.ethereum
coinbase: null
at block: 0 (1970-01-01 00:00:00)
 modules: admin:1.0 db:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 shh:1.0 txpool:1.0 web3:1.0
 > net.listening
 true
 > net.peerCount
 3
 > admin.peers
 [{
   Caps: 'eth/60, eth/61',
   ID: 'e4b620519802ff6fbd2c2326cce9d175c0e45c2ba7690ba2bee2d7697ce48fe3225f8adcb78bce3d2a6ef681d7f6e3c5a7192b3f0fd6f6326f0f51e2d36d07e7',
   LocalAddress: '172.17.42.4:45151',
   Name: 'Geth/v1.1.3-4813a391/linux/go1.4.2',
   RemoteAddress: '50.169.190.231:30303'
 }, {
   Caps: 'eth/60, eth/61',
   ID: '58004f4ebd42783dea1f75b3b080403aec000cabdd03d21f11ba25255b4a3cda50e1c972bc9130d548d3e1b9efb818308f0ff51194a7b6d2de049c62fa82e65e',
   LocalAddress: '172.17.42.4:60203',
   Name: 'Geth/v0.9.39/linux/go1.4.2',
   RemoteAddress: '173.230.228.143:30303'
 } ]

 > admin.nodeInfo
{
  DiscPort: 30303,
  IP: '::',
  ListenAddr: '[::]:30303',
  Name: 'Geth/v0.9.39/linux/go1.4.2',
  NodeID: '352b8e50027ed8c1bc713d62340ed28c7817ae8b40ebce21534bbadff860f728be477fdac540d4b552ac15c0392e555d12c3e379443d0dca14714203861bfcbf',
  NodeUrl: 'enode://352b8e50027ed8c1bc713d62340ed28c7817ae8b40ebce21534bbadff860f728be477fdac540d4b552ac15c0392e555d12c3e379443d0dca14714203861bfcbf@[::]:30303',
  TCPPort: 30303,
  Td: '1166612799091'
}
 > admin.chainSyncStatus
 {
   blocksAvailable: 125314,
   blocksWaitingForImport: 512,
   estimate: '4m26.38876782s',
   importing: 237
 }


```
