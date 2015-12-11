import React from 'react'
import {issLocation} from './api'

export default React.createClass({
  componentDidMount(){
     window.map = new GMaps({
      div: '#map',
      lat: this.props.location.latitude,
      lng: this.props.location.longitude,
      zoom: 1
    });
    map.addMarker({
      lat: this.props.location.latitude,
      lng: this.props.location.longitude
    });

    this.addMarkers()
  },

  addMarkers: function(){
    setInterval(function(){
      issLocation().then(function(res){
        window.map.removeMarkers()
        window.map.addMarker({
          lat: res.latitude,
          lng: res.longitude
        });
      })
    }, 1000)
  },

  render: function(){
    return (
      <div className="map-holder">
        <h1>International Space Station Tracker</h1>
        <div id="map"></div>
      </div>
    );
  }
})
