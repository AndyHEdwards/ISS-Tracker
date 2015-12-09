import React from 'react'
import ReactDOM from 'react-dom'
import Map from './Map'

import 'fetch';
import {issLocation} from './api'

class Stuff extends React.Component {
  render() {
    return <p>hehehe</p>
  }
}



issLocation().then(function(res){
  ReactDOM.render(<Map location={res[0]} />, document.getElementById('app'))
})
