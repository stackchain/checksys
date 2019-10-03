import React, { Component } from "react";
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { 
  ThemeProvider 
} from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faClipboardCheck,
  faUserCheck,
  faTrash,
  faCheckDouble,
  faSmile,
  faFrown,
  faTasks,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import {
  faImage
} from "@fortawesome/free-regular-svg-icons";
import Web3 from "web3";
import ENS from "ethjs-ens";

import Theme from "../../view/assets/Theme";

import networks, { isSupported, supportedNetworks } from "../utils/networks";
import * as C from "../utils/constants";

import {
  locked,
  update,
  network,
  ens
} from "../redux/metamask/status";
import {
  request
} from "../redux/checksys/data";
import buildStore from "../redux/store";

import { events } from "../apis/checksys";

import RouteChecklist from "./Checklist";
import RouteInspection from "./Inspection";
import RouteWelcome from "./Welcome";
import RouteFAQ from "./FAQ";
import RouteAbout from "./About";
import RouteContact from "./Contact";
import RouteExecuteInspection from "./ExecuteInspection";
import RouteCheckInspection from "./CheckInspection";

import ScreenHeader from "../../view/components/layout/Header";

library.add([
  faClipboardCheck,
  faUserCheck,
  faTrash,
  faCheckDouble,
  faSmile,
  faFrown,
  faImage,
  faTasks,
  faSearch
]);

const Layout = ComposedComponent =>
  class extends React.Component {
    shouldComponentUpdate() {
      return false;
    }

    render() {
      return (
        <div>
          <ScreenHeader />
          <ComposedComponent {...this.props} />
        </div>
      )
    }
  }

// TODO: turn into a component to manage AUTH/Meta/Net
const initAuth = async (store) => {
  const web3 = new Web3();

  if (typeof window.web3 !== "undefined") { 
    web3.setProvider(window.web3.currentProvider);
  } else {
    web3.setProvider(Web3.providers.HttpProvider("http://localhost:8545"));
  }

  window.web3 = web3;

  let id;
  id = (await window.web3.eth.net.getId()).toString();

  window.ens = new ENS({ provider: window.web3.eth.currentProvider, network: id });

  if (isSupported(id)) {
    store.dispatch(network(networks(id)));

    window.web3.currentProvider.publicConfigStore.on("update", async (data) => {
      if (!data.selectedAddress) {
        store.dispatch(locked());
      } else {
        store.dispatch(update(data.selectedAddress));
      }
    });
  
    if (window.web3.eth.accounts.length <= 0) {
      store.dispatch(locked());
    } else {
      store.dispatch(update(window.web3.eth.accounts.currentProvider.selectedAddress));
    }
  
  } else {
    store.dispatch(network());
    alert("The selected network is not supported, the supported network are: \n" + supportedNetworks.map(e => networks(e).name).join("\n"));
  }


  let name;
  try {
    name = await window.ens.reverse(window.web3.eth.accounts.currentProvider.selectedAddress);
    store.dispatch(ens(name));
  } catch (e) {
  }

}

// TODO: turn into a component 
// TODO: make it smart :D - refresh based on router
const initWatcher = async (store) => {
  if (store.getState().metamaskStatus.network) {
    const watcher = await events();
    watcher
    .on("data", (data) => {
      store.dispatch(request());
    })
    .on("error", (error) => {
      console.error("e:", error);
    })
  }
}

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      metamask: {}
    }

    this.store = buildStore();

    this.unsubscribeToStore = this.store.subscribe(_ => {
      let metamask = this.store.getState().metamaskStatus;
      if (metamask !== this.state.metamask) this.setState({ metamask });
    });

    this.init();
  }

  async init() {
    await initAuth(this.store);

    await initWatcher(this.store);

  }
 
  componentWillUnmount() {
    if (this.unsubscribeToStore) this.unsubscribeToStore();
  }

  render() {
    return (
      <Provider store={this.store}>
        <ThemeProvider theme={Theme}>
          <Router>
            <Switch>
              { this.state.metamask.status === C.STATUS_OK ? [
                <Route exact path={"/checklist"} component={ Layout(RouteChecklist) } key={"checklist"} />,
                <Route exact path={"/inspection"} component={ Layout(RouteInspection) } key={"inspection"} />,
                <Route path={"/execute/:number"} component={ Layout(RouteExecuteInspection)} key={"execute"} />,
                <Route path={"/check/:number"} component={ Layout(RouteCheckInspection)} key={"execute"} />,
              ] : null }
              <Route exact path={"/faq"} component={ Layout(RouteFAQ) } key={"faq"} />
              <Route exact path={"/about"} component={ Layout(RouteAbout) } key={"about"} />
              <Route exact path={"/contact"} component={ Layout(RouteContact) } key={"contact"} />
              <Route exact path={"/"} component={ Layout(RouteWelcome) } key={"welcome"} />
              <Redirect from={"*"} to={"/"} />
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default Main;