import React, { Component } from 'react';

class celciusHeat extends Component {
    render(){
        return(
            <div>
              <div class="card-item">
              <p>Celcius</p>
              <span>{this.props.temperature} °C</span>
             </div>
            </div>
        )
    }
}

export default celciusHeat;
