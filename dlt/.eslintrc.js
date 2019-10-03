module.exports = {
  "extends": [
    "standard",
  ],
  globals: {
    "artifacts": false,
    "contract": false,
    "assert": false,
    "web3": false,
    "describe": false,
    "it": false,
    "beforeEach": false
  },
  "rules": {
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
  }
};