import React from "react";

// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import celebrities from '../celebrities.json'
import AccordionComponent from "./components/Accordion";
function App() {

  return (
    <div className="d-flex justify-content-center">
      <AccordionComponent list = {celebrities}></AccordionComponent>

    </div>
  );
}

export default App;
