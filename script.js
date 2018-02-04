var key = "&appid=646fa32a9923bf81c49a5ab8f813242d";
var base_url = "http://api.openweathermap.org/data/2.5/weather?q=";
$(document).ready(function(){
    $('form').submit(function(){
        var where = $("#box").val();
        var url = (base_url + where + key);
        $.get(url, function(res){
            //console.log(res);
            var heat = res.main.temp;
            var temp = (Math.floor(((9/5)*(heat - 273)) +32));
            $('#where').html(where);
            $('#temp').html(temp + "&deg;F");
        }, 'json');
        
        //console.log(url);
        return false;
    });
});