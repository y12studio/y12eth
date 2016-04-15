contract('YETXKD1601', function(accounts) {

    var ACC0 = accounts[0]
    var ACC1 = accounts[1]

    it("should put 10000 MetaCoin in the first account", function(done) {
        var meta = Yetxkd1601.deployed();
        meta.getBalance.call(ACC0).then(function(balance0) {
            assert.equal(balance0.valueOf(), 10000, "10000 wasn't in the first account");
        }).then(done).catch(done);
    });

    it("should call a function that depends on a linked library  ", function(done) {
        var meta = Yetxkd1601.deployed();
        var metaCoinBalance;
        var metaCoinEthBalance;

        meta.getBalance.call(ACC0).then(function(balance0) {
            metaCoinBalance = balance0.toNumber();
            return meta.getBalanceInEth.call(ACC0);
        }).then(function(balanceEth0) {
            metaCoinEthBalance = balanceEth0.toNumber();

        }).then(function() {
            assert.equal(metaCoinEthBalance, 2 * metaCoinBalance, "Library function returned unexpeced function, linkage may be broken");

        }).then(done).catch(done);
    });

    it("should send coin correctly", function(done) {
        var meta = Yetxkd1601.deployed();

        // Get initial balances of first and second account.

        var ACC0_starting_balance;
        var ACC1_starting_balance;
        var ACC0_ending_balance;
        var ACC1_ending_balance;

        var amount = 10;

        meta.getBalance.call(ACC0).then(function(balance0) {
            ACC0_starting_balance = balance0.toNumber();
            return meta.getBalance.call(ACC1);
        }).then(function(balance1) {
            ACC1_starting_balance = balance1.toNumber();
            return meta.sendCoin(ACC1, amount, {
                from: ACC0
            });
        }).then(function(tx_id) {
            assert.isNotNull(tx_id)
            return meta.getBalance.call(ACC0);
        }).catch(function(e){
            assert.isNull(e)
        }).then(function(balance0) {
            ACC0_ending_balance = balance0.toNumber();
            return meta.getBalance.call(ACC1);
        }).then(function(balance1) {
            ACC1_ending_balance = balance1.toNumber();
            assert.equal(ACC0_ending_balance, ACC0_starting_balance - amount, "Amount wasn't correctly taken from the sender");
            assert.equal(ACC1_ending_balance, ACC1_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
        }).then(done).catch(done);
    });

    it("should check amount correctly", function(done) {
        var meta = Yetxkd1601.deployed();
        var initialAmount = 0;

        meta.getBalance.call(ACC0).then(function(balance0) {
            return meta.sendCoin(ACC1, balance0.toNumber() + 99, {
                from: ACC0
            });
        }).then(function(tx_id) {
            assert.isNull(tx_id)
        }).catch(function(e) {
            assert.isNotNull(e)
        }).then(done).catch(done);
    });
});
