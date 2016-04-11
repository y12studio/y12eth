import "ConvertLib.sol";

contract Yetxkd1601 {
	mapping (address => uint) balances;

	function Yetxkd1601() {
		balances[tx.origin] = 10000;
	}

	function sendCoin(address receiver, uint amount) returns(bool sufficient) {
		if (balances[msg.sender] < amount) return false;
		balances[msg.sender] -= amount;
		balances[receiver] += amount;
		return true;
	}

	function getBalanceInEth(address addr) returns(uint){
		return ConvertLib.convert(getBalance(addr),2);
	}

  	function getBalance(address addr) returns(uint) {
    	return balances[addr];
  	}

	function getFoo(address addr) returns(uint){
	   return balances[addr];
	}

}
