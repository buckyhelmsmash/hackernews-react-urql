import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import LinkList from "./LinkList";
import CreateLink from "./CreateLink";
import Login from "./Login";
import Search from "./Search";

const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route exact path="/" component={LinkList} />
        <Route exact path="/create" component={CreateLink} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  </div>
);

export default App;