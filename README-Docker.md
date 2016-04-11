Build Test Env.

etherparty/explorer: A lightweight ethereum block explorer
 https://github.com/etherparty/explorer

elysianempire/ethereum: Ethereum Docker Container
 https://github.com/elysianempire/ethereum

```
$ docker run -it -p 30303:30303 ethereum/client-go:alpine --fast console
$ docker ps
CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS              PORTS                                NAMES
67bf68313fd6        ethereum/client-go:alpine   "/geth --fast console"   2 hours ago         Up 2 hours          8545/tcp, 0.0.0.0:30303->30303/tcp   sleepy_gates
$ docker commit 67bf68313fd6  y12docker/y12eth:v160225
$ docker commit f000986a1a02  y12docker/y12eth:v160226
$ docker images | grep y12eth
y12docker/y12eth                v160226             3da1b3e91697        7 seconds ago       2.063 GB
y12docker/y12eth                v160225             58a5cb90a2ff        25 hours ago        1.085 GB

```
