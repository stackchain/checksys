export const NETWORK_MAIN = "1";
export const NETWORK_ROPSTEN = "3";
export const NETWORK_RINKEBY = "4";
export const NETWORK_KOVAN = "42";
export const NETWORK_LOCAL = "L";

export const supportedNetworks = [NETWORK_ROPSTEN, NETWORK_RINKEBY, NETWORK_KOVAN, NETWORK_LOCAL];

export const isLocalhost = id => (Number(id) > 100 || id === undefined);
export const isSupported = id => (isLocalhost(id) || supportedNetworks.filter(e => e === id).length > 0);

export default (id = NETWORK_LOCAL) => ({
  // [NETWORK_MAIN]: {
  //   name: "Main net",
  //   httpsUrl: process.env.REACT_APP_NETWORK_MAINNET_HTTPS_URL,
  //   wssUrl: process.env.REACT_APP_NETWORK_MAINNET_WSS_URL,
  //   scanUrl: "https://etherscan.io/"
  // },
  [NETWORK_ROPSTEN]: {
    name: "Ropsten test net",
    httpsUrl: "",
    wssUrl: "wss://ropsten.infura.io/ws",
    scanUrl: "https://ropsten.etherscan.io/",
    tag: "ropsten",
    ens: "0x112234455c3a32fd11230c42e7bccd4a84e02010"
  },
  [NETWORK_RINKEBY]: {
    name: "Rinkeby test net",
    httpsUrl: "",
    wssUrl: "wss://rinkeby.infura.io/ws",
    scanUrl: "https://rinkeby.etherscan.io/",
    tag: "rinkeby",
    ens: "0xe7410170f87102df0055eb195163a03b7f2bff4a"
  },
  [NETWORK_KOVAN]: {
    name: "Kovan test net",
    httpsUrl: "",
    wssUrl: "wss://kovan.infura.io/ws",
    scanUrl: "https://kovan.etherscan.io/",
    tag: "kovan",
    ens: ""
  },
  [NETWORK_LOCAL]: {
    name: "Local dev net",
    httpsUrl: "",
    wssUrl: "",
    scanUrl: "",
    tag: "local",
    ens: ""
  }
}[isLocalhost(id) ? NETWORK_LOCAL : id]);