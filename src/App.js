import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import HomePage from './HomePage'
import PizzaForm from './PizzaForm'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/pizza" component={PizzaForm}/>
        <Route path="/" component={HomePage}/>
      </Switch>
    </div>
  );
};
export default App;
