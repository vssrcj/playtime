/* global google */
import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
import styled, { css } from 'styled-components';
import star from './star.svg';
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


function getPlaces(location, map) {
   const request = {
      location,
      radius: 500,
      type: ['restaurant'],
   };

   function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
         for (var i = 0; i < results.length; i++) {
            const { geometry: { location } } = results[i];
            
            new google.maps.Marker({
               position: location,
               icon: star,
               map: map,
            });
         }
      }
   }

   const service = new google.maps.places.PlacesService(map);
   service.nearbySearch(request, callback);
}


class App extends Component {
   componentDidMount() {
      var chicago = new google.maps.LatLng(41.850, -87.650);

      var map = new google.maps.Map(this.el, {
         center: {lat: -34.397, lng: 150.644},
         zoom: 3,
         disableDefaultUI: true
      });

      var noPoi = [
         {
             featureType: "poi",
             stylers: [
               { visibility: "off" }
             ]   
           },
           {
            featureType: "transit",
            stylers: [
              { visibility: "off" }
            ]   
          }
           
         ];
         
         map.setOptions({styles: noPoi});

      var infoWindow = new google.maps.InfoWindow;

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
            function(position) {
               var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
               };

               new google.maps.Marker({
                  position: pos,
                  icon: star,
                  map: map,
               });

               getPlaces(pos, map);
               console.log(map);
               // infoWindow.setPosition(pos);
               // infoWindow.setContent('Location found.');
               // infoWindow.open(map);
               map.setZoom(16);
               map.setCenter(pos);
            },
            function() {
               handleLocationError(true, infoWindow, map.getCenter());
            }
         );
      } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
      }

   }
  render() {


     return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }} ref={(el) => { this.el = el; }} />
    );
  }
}

export default App;
