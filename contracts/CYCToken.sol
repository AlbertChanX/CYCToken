pragma solidity ^0.4.21;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
 
contract CYCToken is StandardToken {
  string public constant name = "CYCToken";
  string public constant symbol = "CYC";
  uint public constant decimals = 8;
 

  uint256 public constant INITIAL_SUPPLY = 21000000 * (10 ** uint256(decimals));

  /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */
  function CYCToken() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
    emit Transfer(0x0, msg.sender, INITIAL_SUPPLY);
  }
}