var issLocation = function(){
  let url = `https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles`

  return fetch(url).then(response => response.json())
}

export {issLocation}
