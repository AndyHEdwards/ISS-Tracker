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
      div: '#map',
      lat: -41.2889,
      lng: 174.7772
    });

    console.log(typeof this.props.location.latitude.toString())

    // map.addMarker({
    //   lat: -41.2889,
    //   lng: 174.7772
    // });
  },

  render: function(){
    return (
      <div className="map-holder">
        <div id="map"></div>
      </div>
    );
  }
})
