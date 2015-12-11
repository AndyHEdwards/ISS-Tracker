var issLocation = function(){
  let url = `https://api.wheretheiss.at/v1/satellites/25544`

  return fetch(url).then(response => response.json())
}

export {issLocation}
