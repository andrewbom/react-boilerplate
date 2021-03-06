import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./about";

function App() {
  return (
    <div>
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/about" component={About} />
        {/* <Route exact path="/register" component={Auth(RegisterPage, false)} /> */}
      </Switch>
    </div>
  );
}

export default App;
