/* global google */
import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
import Map from './Map';
class App extends Component {
  render() {
     console.log(this.props.google);
     if (!this.props.google) return null;
     return <Map />;
  }
}

export default App;
