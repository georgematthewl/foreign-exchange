import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme";
import { routes } from "./routes";
import { AppContainer } from "./style";

class App extends React.Component {
  render() {
    const pages = routes.map((route) => (
      <Route
        key={route.component}
        component={route.component}
        exact={route.exact}
        path={route.path}
      />
    ));

    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Switch>{pages}</Switch>
        </AppContainer>
      </ThemeProvider>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default withRouter(connect(null, mapDispatchToProps)(App));
