# y12eth
Ethereum Test Project

docker image Test https://hub.docker.com/r/ethereum/client-go/tags/

go-ethereum/containers/docker at develop · ethereum/go-ethereum
 https://github.com/ethereum/go-ethereum/tree/develop/containers/docker

 Docker | Ethereum Frontier Guide
  https://ethereum.gitbooks.io/frontier-guide/content/using_docker.html

```
$ date
Thu Feb 25 12:22:39 CST 2016
$ docker pull ethereum/client-go:alpine
alpine: Pulling from ethereum/client-go
ee54741ab35b: Already exists
e917357c1218: Pull complete
a3ed95caeb02: Pull complete
Digest: sha256:f1f5a30eee4c9cbafa842935c07a9f59bed128ebc7d32848a36cf00c77ed801c
Status: Downloaded newer image for ethereum/client-go:alpine

$ docker images | grep ethereum
ethereum/client-go              alpine              f2705410169e        12 hours ago        31.14 MB
ethereum/client-go              latest              d39ad3866acb        5 months ago        315.4 MB

$ docker run -it -p 30303:30303 ethereum/client-go:alpine --fast console
I0225 04:24:25.425658       1 flags.go:425] WARNING: No etherbase set and no accounts found as default
I0225 04:24:25.426433       1 database.go:71] Alloted 16MB cache to /root/.ethereum/chaindata
I0225 04:24:25.432989       1 database.go:71] Alloted 16MB cache to /root/.ethereum/dapp
I0225 04:24:25.435781       1 backend.go:314] Protocol Versions: [63 62 61], Network Id: 1
I0225 04:24:25.435905       1 backend.go:362] Blockchain DB Version: 3
I0225 04:24:26.084474       1 blockchain.go:160] WARNING: Wrote default ethereum genesis block
I0225 04:24:26.084475       1 blockchain.go:214] Last header: #0 [d4e56740…] TD=17179869184
I0225 04:24:26.084489       1 blockchain.go:215] Last block: #0 [d4e56740…] TD=17179869184
I0225 04:24:26.084539       1 blockchain.go:216] Fast block: #0 [d4e56740…] TD=17179869184
I0225 04:24:26.088263       1 cmd.go:114] Starting Geth/v1.3.3-c541b38f/linux/go1.5.3
I0225 04:24:26.088451       1 server.go:311] Starting Server
I0225 04:24:27.531892       1 udp.go:204] Listening, enode://d909a4be7f9a0e0d4225846006a19d375032b37791e79944550485b11b1b193200060c29144d17826c5dd57ef4ed25e51045b19e69d2ead7393af29f8e3fced2@[::]:30303
I0225 04:24:27.532801       1 server.go:552] Listening on [::]:30303
I0225 04:24:27.533324       1 backend.go:526] Server started
I0225 04:24:27.534210       1 ipc.go:112] IPC service started (/root/.ethereum/geth.ipc)
instance: Geth/v1.3.3-c541b38f/linux/go1.5.3
 datadir: /root/.ethereum
coinbase: null
at block: 0 (Thu, 01 Jan 1970 00:00:00 UTC)
modules: admin:1.0 db:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 shh:1.0 txpool:1.0 web3:1.0

> admin.verbosity(6)
> eth.blockNumber
1056683
> eth.syncing
false

$ docker ps
CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS              PORTS                                NAMES
67bf68313fd6        ethereum/client-go:alpine   "/geth --fast console"   2 hours ago         Up 2 hours          8545/tcp, 0.0.0.0:30303->30303/tcp   sleepy_gates
$ docker commit 67bf68313fd6  y12docker/y12eth:v160225
$ docker images | grep y12eth
y12docker/y12eth                v160225             58a5cb90a2ff        56 seconds ago      1.085 GB

console exit

$ docker run -it -p 30303:30303 y12docker/y12eth:v160225 --fast console


```
