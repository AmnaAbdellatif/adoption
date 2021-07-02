import React, {Component, useState ,useEffect} from 'react';
import './VetoMap.css';
import axios from 'axios' ;
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import leafGreen from '../assets/leaf-green.png';
import leafRed from '../assets/leaf-red.png';
import leafOrange from '../assets/leaf-orange.png';
import leafShadow from '../assets/leaf-shadow.png';
import locationpin from '../assets/location-pin.png';
import location from '../assets/location.png';
import pin from '../assets/pin.png';
import placeholder from '../assets/placeholder.png';

class VetoMap extends Component {
   
    state = {
        greenIcon: {
          lat: 	35.825603,
          lng: 	10.608395,
        },
        redIcon: {
          lat: 35.8589,
          lng: 10.5939,
        },
        orangeIcon: {
          lat: 35.8403,
          lng:  10.5943,
        },
        locationpin : {
            lat: 35.844,
            lng:  10.6188,
          },
          pin: {
            lat: 35.7772,
            lng:  10.8261,
          },
          placeholder: {
            lat:  35.7605,
            lng:  10.7528,
          },
          location: {
            lat: 35.6333,
            lng: 10.9,
          },
          location1: {
            lat: 35.8651,
            lng: 10.6077,
          },
          location2: {
            lat: 35.8876,
            lng: 10.5971,
          },
          location3: {
            lat: 35.7772,
            lng: 10.8261,
          },
          location4: {
            lat: 35.7747,
            lng: 10.7951,
          },
          location5: {
            lat: 35.6922,
            lng: 10.8405,
          },
        zoom:13,
      }
      grenIcon = L.icon({
        iconUrl: leafGreen,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76]
      });
    
      redIcon = L.icon({
        iconUrl: leafRed,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
      });
    
      orangeIcon = L.icon({
        iconUrl: leafOrange,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
      });
      location = L.icon({
        iconUrl: leafOrange,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
      });
      locationpin = L.icon({
        iconUrl: leafGreen,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
      });
      placeholder = L.icon({
        iconUrl: leafRed,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
      });
      pin = L.icon({
        iconUrl: leafOrange,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
      });
      location1 = L.icon({
        iconUrl: leafGreen,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
      });
      location2 = L.icon({
        iconUrl: leafGreen,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
      });
    render(){
       
        const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
        const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
        const positionOrangeIcon = [this.state.orangeIcon.lat, this.state.orangeIcon.lng];
        const positionLocationpinIcon = [this.state.locationpin.lat, this.state.locationpin.lng];
        const positionLocationIcon = [this.state.location.lat, this.state.location.lng];
        const positionPlaceholderIcon = [this.state.placeholder.lat, this.state.placeholder.lng];
        const positionPinIcon = [this.state.pin.lat, this.state.pin.lng];
        const positionLocation1Icon = [this.state.location1.lat, this.state.location1.lng];
        const positionLocation2Icon = [this.state.location2.lat, this.state.location2.lng];
        const positionLocation3Icon = [this.state.location3.lat, this.state.location3.lng];
        const positionLocation4Icon = [this.state.location4.lat, this.state.location4.lng];
        const positionLocation5Icon = [this.state.location5.lat, this.state.location5.lng];
        return (
          <MapContainer className="map" center={positionGreenIcon} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={positionGreenIcon} icon={this.orangeIcon}>
              <Popup>   
                	
              Dr Aroua Khiari Mzabi . <br/>
               Jawhara,Sousse,Tunisie
              </Popup>
            </Marker>
            <Marker position={positionRedIcon} icon={this.orangeIcon}>
              <Popup>
              Dr Najeh chebaane. <br/>
        
              Hammam Sousse,Sousse
              </Popup>
            </Marker>
            <Marker position={positionOrangeIcon} icon={this.orangeIcon}>
              <Popup>
              Dr Med Salem Chemek. <br/> Sahloul,Sousse,Tunisie
              </Popup>
            </Marker>
            <Marker position={positionLocationIcon} icon={this.redIcon}>
              <Popup>
              clinique vétérinaire <br/>
              Moknine,Monastir
              </Popup>
            </Marker>
            <Marker position={positionPlaceholderIcon} icon={this.redIcon}>
              <Popup>
             
              Amal medical center. <br/>
              Monastir,Tunisie
              </Popup>
            </Marker>
            <Marker position={positionPinIcon} icon={this.redIcon}>
              <Popup>
              Dr Wiem Mabrouk <br/>
              Monastir ville,Tunisie
              </Popup>
            </Marker>
            <Marker position={positionLocationpinIcon} icon={this.orangeIcon}>
              <Popup>
              Veterinaire kharroubi naoufel. <br/>
              Sousse Ville,Tunisie
              </Popup>
            </Marker>
            <Marker position={positionLocation1Icon} icon={this.orangeIcon}>
              <Popup>
              Dr.Anas trabelsi. <br/>
              Avenue 14 janvier,sousse ,Tunisie
              </Popup>
            </Marker>
            <Marker position={positionLocation2Icon} icon={this.orangeIcon}>
              <Popup>
              Veterinaire kharroubi naoufel. <br/>
              Route de la plage hammam sousse,Tunisie
              </Popup>
            </Marker>
            <Marker position={positionLocation3Icon} icon={this.redIcon}>
              <Popup>
              Cabinet vétérinaire Dr Ktari Med Yassine "Pet's hope". <br/>
              Route de skanes,Monastir,Tunisie
              </Popup>
            </Marker>
            <Marker position={positionLocation4Icon} icon={this.redIcon}>
              <Popup>
              Veto BestFriend. <br/>
              Monastir,Tunisie
              </Popup>
            </Marker>
            <Marker position={positionLocation5Icon} icon={this.redIcon}>
              <Popup>
              cabinet vétérinaire DR Mejdi Gall. <br/>
              Monastir,Tunisie
              </Popup>
            </Marker>
          </MapContainer>
        );
      }
    }
    
    export default VetoMap;
