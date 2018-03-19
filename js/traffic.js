// 96ba16976587471abc48a52b03ba0923
$(document).ready(function($) {
  let bus = 'http://api.sl.se/api2/realtimedeparturesv4.json?key=ac01147b959c48d3b72a2e903cc50f3d&siteid=1280&timewindow=30';
  let train = 'http://api.sl.se/api2/realtimedeparturesv4.json?key=ac01147b959c48d3b72a2e903cc50f3d&siteid=9811&timewindow=30';

  // setInterval(function(){
    $('.traffic-info div').empty();
    $.ajax({
      type: 'GET',
      url: bus,
      contentType: "json",
      dataType: 'json',
      success: function (bus) {
        let departures = bus.ResponseData.Buses;
        console.dir(departures);
        // for (let i = 0; departures.length > i; i++) {
          $('.traffic-info').append('<div> ' + departures[0].LineNumber + ' ' + departures[0].Destination + ' <i class="fa fa-x2 fa-long-arrow-right"></i> ' + departures[0].StopAreaName +  ', ' + departures[0].DisplayTime + '<span class="timeStamp">' + departures[0].ExpectedDateTime.substring(11, 16) + '</span><div>');
          $('.traffic-info').append('<div class="next">Nästa buss: ' + departures[1].ExpectedDateTime.substring(11, 16) + '</div>');
        // }
      }
    });
  // }, 30000);

});
