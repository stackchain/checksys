# Avoiding common attacks

The very nature of Checksys solutions is very simple and do not handle any money (**ETH**), so most of the attacks to this contract that attempt to steal eth doesn't make any sense.
Considering that, were implemented those that fit to solution


### Attacks
Attack | Where
-------|------
Arithmetic over/under flows | Implements the SafeMath library from openzeppelin to prevent it
Unexpected ETH | It attempts to revert accidental transfers
Default visibilities | All functions have a defined visibility