import React, { Fragment, Component, FC } from "react";
import { Route, Switch } from "react-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faQuestion,
  faCaretLeft,
  faCaretRight,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Dashboard from "../containers/dashboard/Dashboard";
import Header from "../components/Header/Header";

library.add(
  faAndroid,
  faCircle,
  faQuestion,
  faCaretLeft,
  faCaretRight,
  faSpinner
);

class AppNavigator extends Component {
  App: FC = () => (
    <Fragment>
      <Header />
      <Switch>
        <Route path={`/`} component={Dashboard} exact />
      </Switch>
    </Fragment>
  );

  render() {
    return <this.App />;
  }
}

export default AppNavigator;
