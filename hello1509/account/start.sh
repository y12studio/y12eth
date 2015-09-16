#!/bin/bash
#
/usr/bin/openssl rand -base64 15 | tr -d '+=/' > /pass
# create a new account
pyethapp --password /pass account new
pyethapp --password /pass --unlock 1 account list
# ready to start
pyethapp -c eth.network_id=1337 -b 'enode://288b97262895b1c7ec61cf314c2e2004407d0a5dc77566877aad1f2a36659c8b698f4b56fd06c4a0c0bf007b4cfb3e7122d907da3b005fa90e724441902eb19e@bootstrap:30303' -m 50 run --fake
