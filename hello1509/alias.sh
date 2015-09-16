DCP=yeth1509
alias dc='docker-compose -p ${DCP}'
alias dcup='dc scale bootstrap=1 miner=2 eth=3'
alias miner1='docker exec -i -t ${DCP}_miner_1'
alias miner2='docker exec -i -t ${DCP}_miner_2'
