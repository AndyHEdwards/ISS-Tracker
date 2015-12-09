import React from 'react'
import {issLocation} from './api'

export default React.createClass({
  componentDidMount(){
    console.log(this.props)
    this.componentDidUpdate();
  },

  componentDidUpdate(){

    this.lastLat = this.props.lat;
    this.lastLng = this.props.lng

    var map = new GMaps({
      el: '#map',
      lat: this.props.location.latitude,
      lng: this.props.location.longitude
    });

    console.log(typeof this.props.location.latitude.toString())

    map.addMarker({
      lat: this.props.location.latitude,
      lng: this.props.location.longitude
    });
  },

  render: function(){
    return (
      <div className="map-holder">
        <div id="map"></div>
      </div>
    );
  }
})
