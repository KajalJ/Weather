(function(){

    var app = angular.module('Weather', [ ]);
    
    app.controller('ForecastController', function($http){
        
        this.days = week;
        
        function convertF2K(kelvin){
            var fahrenheit = ((kelvin-273.15)* 1.8)+32;
            return Math.round(fahrenheit);
        }
            
        var formatWeek = function(list){
//            week[0].temp = convertF2K(list[0].main.temp);
//            week[1].temp = convertF2K(list[1].main.temp);
//            week[2].temp = convertF2K(list[2].main.temp);
//            week[3].temp = convertF2K(list[3].main.temp);
//            week[4].temp = convertF2K(list[4].main.temp);
//            week[5].temp = convertF2K(list[5].main.temp);
//            week[6].temp = convertF2K(list[6].main.temp);
            
            var j = 0
            for(j = 0;j<7; j++){
                week[j].temp = convertF2K(list[j].main.temp);
            }

        }
        
        this.update = function(){
            //alert("I'm updating!");
            $http.get('http://api.openweathermap.org/data/2.5/forecast?id=4887398&APPID=8502f5e670fbcb2beac53a1a5a3b4c4a')
            .success(function(data){
                formatWeek(data.list);
                
            });
        }
   });
    
    var week =[
        {
            name:'Monday',
            temp: 35,
            isSunny: false,
            isRainy: false,
            images:['sunny.jpeg','rainy.jpg','cloudy.jpg'
                ]
        },
        {
            name:'Tuesday',
            temp: 77,
            isSunny: true,
            isRainy: false,
            images:['sunny.jpeg','rainy.jpg','cloudy.jpg'
                ]
        },
        {
            name:'Wednesday',
            temp: 41,
            isSunny: false,
            isRainy: true,
            images:['sunny.jpeg','rainy.jpg','cloudy.jpg'
                ]
        },
        {
            name:'Thursday',
            temp: 90,
            isSunny: true,
            isRainy: true,
            images:['sunny.jpeg','rainy.jpg', 'cloudy.jpg'
                ]
        },
        {
            name:'Friday',
            temp: 35,
            isSunny: false,
            isRainy: true,
            images:['sunny.jpeg','rainy.jpg','cloudy.jpg'
                ]
        },
        {
            name:'Saturday',
            temp: 67,
            isSunny: false,
            isRainy: false,
            images:['sunny.jpeg','rainy.jpg','cloudy.jpg'
                ]
        },
        {
            name:'Sunday',
            temp: 23,
            isSunny: true,
            isRainy: false,
            images:['sunny.jpeg','rainy.jpg','cloudy.jpg'
                ]
        },
    ]

})(); 

