import React, { Component } from 'react'

class headContent extends Component {
    render() {
        return (
          <div>
          <div class="head-partial">
           <p>Sıcaklık Ayarları</p>
           <div class="head-partial-body">
           <p>Oda Sıcaklığı {this.props.temperature}°C</p>
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
           </div>
           </div>
         </div>
        );
    }
}

export default headContent;