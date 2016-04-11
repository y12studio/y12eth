// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getFoo","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052600160a060020a0332166000908152602081905260409020612710905561014b8061002f6000396000f3606060405260e060020a60003504637bd703e8811461003c57806390b98a1114610067578063f8b2cb4f14610096578063fd7253f914610096575b005b6100bc60043560007387dbedb5fe1a8a6c3d5b8c56482c10f0264326926396e4ee3d6101068461009d565b6100bc60043560243533600160a060020a0316600090815260208190526040812054829010156100ce57610100565b6100bc6004355b600160a060020a0381166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560015b92915050565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506100b7905056",
    unlinked_binary: "6060604052600160a060020a0332166000908152602081905260409020612710905561014b8061002f6000396000f3606060405260e060020a60003504637bd703e8811461003c57806390b98a1114610067578063f8b2cb4f14610096578063fd7253f914610096575b005b6100bc600435600073__ConvertLib____________________________6396e4ee3d6101068461009d565b6100bc60043560243533600160a060020a0316600090815260208190526040812054829010156100ce57610100565b6100bc6004355b600160a060020a0381166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560015b92915050565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506100b7905056",
    address: "0x20400e180aa7434ab55fc1106c9f290649d76eaa",
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
