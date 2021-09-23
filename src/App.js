import React from "react";

import './assets/css/style.css'

import Main from "./components/main/Main";
import Wallet from "./components/wallet/Wallet";
import Welcome from "./components/wellcome/Welcome";

export default function App() {
  return (
    <div className="feed-application">
      <div class="container-fluied">
        <div class="row">
          <div class="col-md-3">
            <Welcome />
          </div>
          <div class="col-md-6">
            <Main />
          </div>
          <div class="col-md-3">
            <Wallet />
          </div>
        </div>
      </div>
    </div>
  );
}
