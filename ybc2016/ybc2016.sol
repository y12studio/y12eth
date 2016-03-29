contract EthUsdPriceTicker is usingOraclize {

    address owner;
    // 4123456=4.123456 Banana KG
    uint public ETHBNKG;
    uint public count;


    function EthUsdPriceTicker() {
        if(msg.value < 100 finney ) throw;
        owner = msg.sender;
        oraclize_setNetwork(networkID_testnet);
        oraclize_setProof(proofType_TLSNotary | proofStorage_IPFS);
        update(60);
    }

    function __callback(bytes32 myid, string result, bytes proof) {
        if (msg.sender != oraclize_cbAddress()) throw;
        // "4.983188"  to 4983188
        ETHBNKG = parseInt(result,6);
        count++;
        update(60);
    }

    function update(uint delay) {
        oraclize_query(delay, "URL", "json(https://spreadsheets.google.com/feeds/cells/1K8CYrKzsxMf0SVvlXJgZjn09MyMS_ymZlFQvAsQuT74/od6/public/full/R1C1?alt=json).entry.content.$t");
    }

    function kill(){
        owner.send(this.balance);
        if (msg.sender == owner) suicide(msg.sender);
    }

      /* This unnamed function is called whenever someone tries to send ether to it */
    function() {
        throw; // Prevents accidental sending of ether
    }
}
