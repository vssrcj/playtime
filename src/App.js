/* global google */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled, { css } from 'styled-components';
// import maps from '@google/maps';
// AIzaSyAJCEz1nAAFqcZ2N2gAMdioCfEyIQNkEQU
// var googleMapsClient = maps.createClient({
//    key: 'AIzaSyAJCEz1nAAFqcZ2N2gAMdioCfEyIQNkEQU'
//  });

const Button = styled.div`
   padding: 20px;
   box-sizing: border-box;
   background-color: blue;
   width: 200px;
   height: 200px;
   ${props => props.hover && css`
      background-color: red;
   `}
   transition: all 0.5s;
`;

const AnyReactComponent = ({ text, $hover }) => {
   console.log($hover);
   return (
      <Button hover={$hover}>{text}</Button>
   );
};

class App extends Component {
  render() {
     return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAJCEz1nAAFqcZ2N2gAMdioCfEyIQNkEQU' }}
          defaultCenter={{lat: -34.397, lng: 150.644}}
          defaultZoom={8}
          hoverDistance={20}
        >
          <AnyReactComponent
            lat={-34}
            lng={150}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;
