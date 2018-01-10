import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends Component {
  static defaultProps = {
    center: {lat: 12.917858, lng: 77.624524},
    zoom: 17
  };

  render() {
    
    return (
    <div className="map">
      <GoogleMapReact
            bootstrapURLKeys={{
          key: "AIzaSyAYn-hhYEkL6pqDyN3MsCjfagBxCXfcQwU"
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
      </div>
    );
    
  }
}


export default App;
