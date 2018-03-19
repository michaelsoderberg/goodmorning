// https://www.trafiklab.se/sites/default/files/screnshots/lobbymirror.png
$(document).ready(function($) {
    moment.locale();

    
    // setInterval(function(){
        let date = moment().format('LL');   // 13 mars 2018
        let day = moment().format('dddd');  // Tisdag
        $('.date').empty();
        $('.date').append(date);
        $('.day').empty();
        $('.day').append(day);
        // }, 600000);
        setInterval(function(){
        let time = moment().format('LT');   // 21:50
        $('.time').empty();
        $('.time').append(time);
    }, 1000);
});