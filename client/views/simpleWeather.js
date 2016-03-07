Template.venueWeather.rendered= function(){
    
    var options = {
        location: 'Boston, MA',
        unit: 'c',
        success: function(weather) {
          html = '<h2><i class="icon-'+weather.code+'"></i> '
          html += weather.temp+'&deg;'+weather.units.temp+'</h2>';
          html += '<ul><li>'+weather.city+', '+weather.region +'</li>';
          html += '<li class="currently">'+weather.currently+'</li>';

          $("#weather").html(html);
        },
        error: function(error) {
          $("#weather").html('<p>'+error+'</p>');
        }
      }

      Weather.options = options;
      Weather.load();
}