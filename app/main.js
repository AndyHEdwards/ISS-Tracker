import React from 'react'
import ReactDOM from 'react-dom'
import Map from './Map'

import 'fetch';
import {issLocation} from './api'


setInterval(function(){
issLocation().then(function(res){
  console.log(res)
  ReactDOM.render(<Map location={res} />, document.getElementById('app'))
})
}, 2000)



