$( document ).ready(function() {
    var apiKey="4d8fb5b93d4af21d66a2948710284366"; //APIKEY for service
	$('#searchButton').click(function(){
        var value=$('#searchBar').val(); //to check searchbox value
        if(!value){
            $('#weathrcont').remove();
           $('#weatherreport-empty').append('<div id="validdetails">Please enter city name</div>'); //to append div dynamically
        }else{
        $.ajax({
            type: "GET",
            url:'https://api.openweathermap.org/data/2.5/weather?q='+value+'&appid='+apiKey+'&units=metric',
            dataType: 'json',
            success: function(data){
               var cityname=data.name;
               var citytemp=data.main.temp;
               var descptn=data.weather[0].description;
               $('#weathrcont').remove();
               $('#weatherreport-empty').hide();
                var newContainer= '<div id="weathrcont"><div class="container" id="tempview"><h1 id="city" class="city">'+cityname+'</h1><p id="temp" style="font-size:50px;">'+citytemp+'&#8451;</p><img src="assests/css/cloud.png"><p id="descp" style="font-size:30px;">'+descptn+'</p></div></div>'; //Create a div with newContainer class
               console.log(newContainer); //Check the created div container
            
                $('#weatherreport').append(newContainer); //Append created containerto the parent div        
                            
               $('#tempview').show();
            },
            //IF service fails
            error:function(data){
                $('#weathrcont').remove();
                $('#weatherreport-empty').append('<div id="validdetails">Please check city name</div>');  
            }
            });
        }
	  });

})