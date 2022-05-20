import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import Button from "./components/Buttons/Button";
import Modal from "./components/Modal/Modal";
import Mid from "./components/Mid/Mid";
import Inputs from "./components/Inputs/Inputs";
import Inputs_B from "./components/Inputs_B/Inputs_B";
import Inputs_C from "./components/Inputs_C/Inputs_C";
import Inputs_D from "./components/Inputs_D/Inputs_D";



function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="Title">
              Predict Optimal Lap Based on Race Conditions    
        </div>
        
  <div
    style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: 600
      }}
    >
      <div className="Button1">
        <Button font-family='Plus Jakarta Sans'>Start Predicting</Button>
      </div>
      <div className="Button2">
        <Button btnColor='gray' font-family='Plus Jakarta Sans'> Learn More</Button>
      </div>
      
    </div>
      
        <div className="Objective-Title">
            <bold>Objective</bold>
        </div>

        <div className="Objective">
            Allow users to create an insight for the optimal lap for the initial pitstop in a Formula-1 race based on track and temperature conditions.  This data-driven insight will the user to understand how altering conditions can influence  lap times. This project will be developed into a LiveLab Workshop to instruct users in how to develop these applications, connect the data, and create an insight from the data. In this workshop users will connect a sample dataset to an Oracle Autonomous JSON database and use REST and React technologies to gain insights from the data. Users will then add a record to the data to see how the insight changes.    
        </div>
        
        <div className="F1_Car">
          <img src="/images/F1_Car.png" alt=""/>    
        </div>
        <div className="test">
          <Inputs />
        </div>
        <div className="test1">
          <Inputs_B />
        </div>
        <div className="test2">
          <Inputs_C />
        </div>
        <div className="test3">
          <Inputs_D />
        </div>
        <div className="Button3">
          <Modal />
        </div>
        
        <Mid />
       
      

    </div>

    
    

    
    



    
  );
}



export default App;
