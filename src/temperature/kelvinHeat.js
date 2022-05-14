import React, {Component} from 'react';
class kelvinHeat extends Component{
    render(){
        return(
            <div>
             <div class="card-item">
              <p>Kelvin</p>
              <span>{(this.props.temperature * 1.07 + 273.15).toFixed(2)} °C</span>
             </div>
            </div>
        )
    }
}
export default kelvinHeat;
