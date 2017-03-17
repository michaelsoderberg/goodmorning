// 96ba16976587471abc48a52b03ba0923
$(document).ready(function($) {
  let bus = 'http://api.sl.se/api2/realtimedeparturesv4.json?key=ac01147b959c48d3b72a2e903cc50f3d&siteid=1280&timewindow=30';
  let train = 'http://api.sl.se/api2/realtimedeparturesv4.json?key=ac01147b959c48d3b72a2e903cc50f3d&siteid=9811&timewindow=30';
  // $.get(bus, function(data) {
  //   console.log(data);
  // });
  $.ajax({
    type: 'GET',
    url: bus,
    contentType: "json", // Pay attention to the dataType/contentType
    dataType: 'json', // Pay attention to the dataType/contentType
    success: function (bus) {
      let departures = bus.ResponseData.Buses;
      for (let i = 0; departures.length > i; i++) {
        $('.traffic-info').append('<ul><li> Buss ' + departures[i].LineNumber + ' ' + departures[i].Destination + ' ' + departures[i].DisplayTime + '<li></ul>');
      }
    }
  });
});
