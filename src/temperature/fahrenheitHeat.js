import React, { Component } from 'react'

class fahrenheitHeat extends Component{
    render(){
        return(
            <div>
              <div class="card-item">
               <p>Fahrenheit</p>
               <span>{(this.props.temperature * 1.8 + 32).toFixed(2)} °F</span>
              </div>
            </div>
        )
    }
}
export default fahrenheitHeat;