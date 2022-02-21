import moment from "moment";
import "moment/locale/pt-br";
import React from "react";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Navigator from "./Navigation/Navigator";
import store from "./store";

moment.locale("pt-br");

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
