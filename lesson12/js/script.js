const API_KEY = "6a461be6fa892f2e6b83349986ee8939";

$(function(){
  $('#btn').on('click', function(){
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function(date) {
      //通信成功
      //位置
      $('#place').text(date.name);
      //最高気温
      $('#temp_max').text(date.main.temp_max);
      //最低気温
      $('#temp_min').text(date.main.temp_min);
      //湿度
      $('#humidity').text(date.main.humidity);
      //風速
      $('#speed').text(date.wind.speed);
      //天気
      $('#weather').text(date.weather[0].main);
      //天気アイコン
      $('img').attr("src","http://openweather.org/img/w/" + date.weather[0].icon + ".png");
      $('img').attr("alt",date.weather[0].main);
    }).fail(function(date) {
      //通信失敗
      alert('通信に失敗しました。');
    });
  });
});