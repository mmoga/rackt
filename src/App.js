import React, { Component } from "react";
import "./App.css";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";

// use this at some point to connect to my own API
// require('dotenv').config();
// const { GOOGLE_MAPS_API } = process.env;

const Map = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap
        {...props}
        defaultZoom={8}
        defaultCenter={{ lat: 29.651634, lng: -82.324829 }}
      >
        {props.children}
      </GoogleMap>
    );
  })
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      markers: []
    };
  }
  addMarker(e) {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    this.setState({
      markers: [...this.state.markers, { lat, lng }]
    });
  }
  render() {
    const props = {
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `100vh` }} />,
      mapElement: <div style={{ height: `100%` }} />
    };
    const pins = this.state.markers.map((marker, index) => (
      <MarkerWithLabel key={index} position={marker} >i</MarkerWithLabel>
    ));
    return (
      <div>
        <Map {...props} onClick={e => this.addMarker(e)}>
          {pins}
        </Map>
      </div>
    );
  }
}

export default App;