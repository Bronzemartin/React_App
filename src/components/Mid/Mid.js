import React, { Component } from 'react';
import './Mid.css';

class Mid extends Component {
    render() {
        return(
            <nav className="MidItems">  
                <div className="MidTitle">
                    Predict the Best Conditions for Racing
                       
                </div>  
                <div className="Box1">
                    Pick the temperature for the track (°C).  
           
                </div>  
                <div className="Box2">
                    Pick the air temperature outside (°C). 
                
                </div>  
                <div className="Box3">
                    Pick the rain percentage for today.
                  
                </div>  
                <div className="Box4">
                    Pick initial pit stop time.  
                
                </div>  
            </nav>
        )
    }
}

export default Mid