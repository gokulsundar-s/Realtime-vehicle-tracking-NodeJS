// function trackLocation() {
//     if ("geolocation" in navigator) {
//         navigator.geolocation.watchPosition(function(position) {
//             // Get the latitude and longitude
//             var latitude = position.coords.latitude;
//             var longitude = position.coords.longitude;

//             // Update the map with the new location
//             console.log(latitude);
//             return {latitude,longitude};
//         }, function(error) {
//            return error;
//         });
//     } else {
//         return "sorry";
//         // alert("Geolocation is not supported by this browser.");
//     }
// }
// // setInterval(trackLocation(), 5000);
// module.exports = {trackLocation};

import fetch from 'node-fetch';

async function getLocation() {
  try {
    const response = await fetch('https://ipinfo.io/json');
    const data = await response.json();
    return {
      latitude: parseFloat(data.loc.split(',')[0]),
      longitude: parseFloat(data.loc.split(',')[1]),
      city: data.city,
      region: data.region,
      country: data.country
    };
  } catch (error) {
    throw error;
  }
}

module.exports = { getLocation };