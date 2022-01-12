import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/styles/App.scss";
import Characters from "../containers/Characters";
import Layout from "../components/Layout";
const Favorites = lazy(() => import("../containers/Favorites"));

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/" component={Characters} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
