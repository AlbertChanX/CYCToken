pragma solidity ^0.4.21;

import 'openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
 
contract MyToken is StandardToken {

    string public name;
    string public symbol;
    uint public decimals;


//  uint256 public INITIAL_SUPPLY;
//  21000000 * (10 ** uint256(decimals));

  /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */
  constructor(string NAME, string SYMBOL, uint DECIMALS, uint INITIAL_SUPPLY) public {
    name = NAME;
    symbol = SYMBOL;
    decimals = DECIMALS;
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
    emit Transfer(0x0, msg.sender, INITIAL_SUPPLY);
  }
  // batch transfer ? to be audited
  function batchTransfer(address[] _tos, uint256[] _amount) public returns (bool) {
    require(_tos.length == _amount.length);
    uint i;
    for(i = 0; i < _tos.length; i++) {
            transfer(_tos[i], _amount[i]);
      emit Transfer(msg.sender, _tos[i], _amount[i]);
    }
    return true;
  }
}