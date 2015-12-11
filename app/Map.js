import React from 'react'
import {issLocation} from './api'

export default React.createClass({
  componentDidMount(){
    this.componentDidUpdate();
    console.log(this.props)
  },

  componentDidUpdate(){

    var map = new GMaps({
      div: '#map',
      lat: this.props.location.latitude,
      lng: this.props.location.longitude,
      zoom: 3
    });

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
