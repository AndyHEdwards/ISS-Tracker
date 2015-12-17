import React from 'react'
import ReactDOM from 'react-dom'
import Map from './Map'

import 'fetch';
import {issLocation} from './api'


  issLocation().then(function(res){
    ReactDOM.render(<Map location={res} />, document.getElementById('app'))
  })



