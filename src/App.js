import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // constructor(){
  //   super();
  //   this.initMap()
  // }
  // initMap() {
  //   var uluru = {lat: -25.363, lng: 131.044};
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 4,
  //     center: uluru
  //   });
  //   var marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map
  //   });
  // }
  // <script
  //   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCFgktTI962eeNrPR-ugydbOJoEWxg8EOI&callback=initMap">
  //   </script>
  render() {
    return (
      <div className="App">
        Needs a filter button and a current location button<br />
        Add a map as well
        <h3>Google Maps Demo</h3>
        <div id="map" />
      </div>
    );
  }
}

export default App;
