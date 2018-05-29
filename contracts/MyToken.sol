pragma solidity ^0.4.21;

import 'openzeppelin-solidity/contracts/token/ERC20/PausableToken.sol';
 
contract MyToken is PausableToken {

    string public name;
    string public symbol;
    uint public decimals;

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
//      function batchTransfer(address[] _tos, uint256[] _amount) public returns (bool) {
//        require(_tos.length == _amount.length);
//        for(uint256 i = 0; i < _tos.length; i++) {
//                transfer(_tos[i], _amount[i]);
//          emit Transfer(msg.sender, _tos[i], _amount[i]);
//        }
//        return true;
//      }

    function transferMultiple(address[] _tos, uint256[] _values)  public 
    whenNotPaused returns (bool) {
        require(_tos.length == _values.length);
        uint256 total = 0;

        for(uint256 i = 0; i < _tos.length; i++) {
            require(_tos[i] != address(0));
            total = total.add(_values[i]);
        }
        require(total <= balances[msg.sender]);
        balances[msg.sender] = balances[msg.sender].sub(total);
        for(i = 0; i < _tos.length; i++) {
            balances[_tos[i]] = balances[_tos[i]].add(_values[i]);
            emit Transfer(msg.sender, _tos[i], _values[i]);
        }
        return true;
    }
}