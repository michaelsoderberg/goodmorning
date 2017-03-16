// http://opendata.smhi.se/apidocs/metfcst/parameters.html
$(document).ready(function($) {
	'use strict';
  let url = 'http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/18.147766/lat/59.221496/data.json';
  $.get(url, function(data) {

    let timeStamps = data.timeSeries;
    for (var i = 0; timeStamps.length > i; i++) {
      let WeatherSymbol = data.timeSeries[i].parameters[18].values[0];
      let WeatherTemperature = data.timeSeries[i].parameters[1].values[0];
      let WeatherTime = data.timeSeries[i].validTime;
      let formattedTime = WeatherTime.substr( 0, 10 );
      $('.weather-info').append('<div class="weather-puff"><h3> Temperature: ' + WeatherTemperature + '</h3><div class="weather-symbol weather-symbol--' + WeatherSymbol + '"</div><p>' + formattedTime + '</p></div>' );
      // $('.weather-info').append('<div class="weather-symbol weather-symbol--' + WeatherSymbol + '"</div>');
      // $('.weather-info').append('<p>' + formattedTime + '</p>');
      if (i === 3) { break; }
    }
  })
});
