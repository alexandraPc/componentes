import logo from'./App.css';
import React from "react";
import Welcome from './Components/welcome';
import Next from './Components/Next';
import Finish from './Components/Finish';
function App() {
  return (
    <div className="App">
      <Welcome name= "Verónica alexandra Payés Carballo" ></Welcome>
      <Next carrera="ingenieria en Ciencias de la Computación" ></Next>
      <Finish info="c#, js, php"></Finish>
    </div>
  );
}

export default App;
