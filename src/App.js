
import logo from './logo.svg';
import './App.css';
import Hcontent from "./headPartial/headContent";
import Hcelcius from "./temperature/celciusHeat";
import Hfahrenheit from "./temperature/fahrenheitHeat";
import Hkelvin from "./temperature/kelvinHeat";
import React, { Component } from 'react'
class App extends Component {
 state = {temperature : 0};
increase = () => {
  this.setState({temperature : this.state.temperature  + 1});
}
decrease = () => {
  this.setState({temperature : this.state.temperature  - 1});
}

  render() {
    return (
      <div>
        <div class="app-container">
        <div class="content-container">
          <div class="head-container">
            <Hcontent temperature ={this.state.temperature }></Hcontent>
            <div class="process">
                  <button onClick={() => this.increase()} class="bg-[#f59999] text-gray-900 hover:bg-[#ff8e8e]" href="/docs/dark-mode">Sıcaklığı Arttır
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
             </svg></button>
                   <button  onClick={() => this.decrease()} class="bg-slate-100 text-gray-900 hover:bg-slate-200" href="/docs/dark-mode">Sıcaklığı Düşür
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
             </svg></button>
                  </div>
          </div>
          <div class="body-container">
           <Hcelcius temperature ={this.state.temperature}></Hcelcius>
           <Hfahrenheit temperature ={this.state.temperature}></Hfahrenheit>
           <Hkelvin temperature ={this.state.temperature}></Hkelvin>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
