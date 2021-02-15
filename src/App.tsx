import React from "react";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import "./App.css";
import AppNavigator from "./navigator/AppNavigator";
import { ApplicationState } from "./store";
import configureStore from "./configureStore";
import { peopleInitialState  } from "./containers/dashboard/reducers";

const history = createBrowserHistory();

const initialState: ApplicationState = {
  people: peopleInitialState,
  router: { location: history.location, action: "PUSH" },
};

const store = configureStore(history, initialState);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppNavigator />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
