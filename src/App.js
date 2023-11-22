import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import PizzaForm from "./PizzaForm";



const App = () => {
  return (
    <div>
      <h1>TEST</h1>
      <Routes>
        <Route path="/pizza" element={<PizzaForm />}/>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>
  );
};
export default App;
