// https://darksky.net/dev/

// http://opendata.smhi.se/apidocs/metfcst/parameters.html
$(document).ready(function($) {
	'use strict';
  let url = 'http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/17.988341/lat/59.322698/data.json';
  $.get(url, function(data) {

    let timeStamps = data.timeSeries;
    // for (var i = 0; timeStamps.length > i; i++) {
      let WeatherSymbol = data.timeSeries[1].parameters[18].values[0];
      let WeatherTemperature = data.timeSeries[1].parameters[1].values[0];
      let WeatherTime = data.timeSeries[1].validTime;
      let formattedTime = WeatherTime;
      // let formattedTime = WeatherTime.substring(11, 16);

      $('.weather-info').append('<div class="weather-puff"></h3><div class="weather-symbol weather-symbol--' + WeatherSymbol + '"</div><h3>' + WeatherTemperature + '°C </h3></div>' );
      // if (i === 3) { break; }
    // }
  })
});
