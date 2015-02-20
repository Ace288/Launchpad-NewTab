$(function() {
  var round = function(num) {
    return Math.round(num*10)/10.0;
  }

  $(".weather").hide();
  $.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=84770,USA&units=metric&APPID=eca545fcd14f4733bd4014e2a91af1ce", function(data) {
    $(".weather").fadeIn(500);
    $(".condition").text(data.list[0].weather[0].main);
    $(".current-temp").text(round(data.list[0].main.temp));
    $(".max").text(round(data.list[0].main.temp_max));
    $(".min").text(round(data.list[0].main.temp_min));
  });
});
