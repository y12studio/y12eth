// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052600160a060020a033216600090815260208190526040902061271090556101488061002f6000396000f3606060405260e060020a60003504637bd703e8811461003157806390b98a111461005c578063f8b2cb4f14610073575b005b61009960043560007353084bb5462fcc96774a4bd91ce97fe265b81b5b6396e4ee3d6101038461007a565b61002f60043560243560098110156100dd57610002565b6100996004355b600160a060020a0381166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b33600160a060020a03908116600090815260208190526040808220805485900390559184168152208054820190555050565b33600160a060020a0316600090815260208190526040902054819010156100ab57610002565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f415610002575050604051519150610094905056",
    unlinked_binary: "6060604052600160a060020a033216600090815260208190526040902061271090556101488061002f6000396000f3606060405260e060020a60003504637bd703e8811461003157806390b98a111461005c578063f8b2cb4f14610073575b005b610099600435600073__ConvertLib____________________________6396e4ee3d6101038461007a565b61002f60043560243560098110156100dd57610002565b6100996004355b600160a060020a0381166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b33600160a060020a03908116600090815260208190526040808220805485900390559184168152208054820190555050565b33600160a060020a0316600090815260208190526040902054819010156100ab57610002565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f415610002575050604051519150610094905056",
    address: "0xd235f064fc1a5dd498317e2bb9bfdb60e9ed2b4e",
    generated_with: "2.0.6",
    contract_name: "Yetxkd1601"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Yetxkd1601 error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Yetxkd1601 error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Yetxkd1601 error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Yetxkd1601 error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Yetxkd1601 = Contract;
  }

})();
