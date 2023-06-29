//results elements
let displayDegree = document.querySelector('#degree')
let displayCountry = document.querySelector('#displayCountry')
let displayDate = document.querySelector('#date')
let displayCondition = document.querySelector('#conditionText')
let conditionIcon = document.querySelector('#conditionIcon')
let conditionResult = document.querySelector('#condition')
let humidityPercentageDisplay = document.querySelector('#humidityPercentage')
let windspeedDisplay = document.querySelector('#windspeed')

//input field
let inputSearch = document.querySelector('#search')

//search button
let searchButton = document.querySelector('#search-button')

let weather = {
    key:"dfd0e437b75148bc8ac02319231004",

    fetchData :function (city){
    
        let api = 'https://api.weatherapi.com/v1/current.json?key='+this.key+'&q='+city+'&aqi=yes'
        fetch(api)
        .then((response)=>response.json())
        
        .then((data)=>{weather.displayWeather(data)
        console.log("success")})
        
        .catch((err)=>{
            console.log(err)
            alert('no matchmaking name');
            
        })
        
    },
    
    
    displayWeather : function(data){
        
        console.log(data)
        let temp_c = data.current.temp_c
        let country = data.location['country']
        let date = data.location['localtime']
        let condition = data.current['condition'].text
        let icon = data.current['condition'].icon
        
        let humiditypercentage = data.current['humidity']
        let windSpeed = data.current['wind_mph']
        //getting time part to check if its  or AM
        let StringTime = date.substring(11,15)
        let time = parseInt(StringTime)
        if (time>=0 && time<12){
            displayDate.innerHTML = date + ' AM'
        }else{
            displayDate.innerHTML = date + ' PM'

        }
        
        displayDegree.innerHTML = temp_c + '°C'
        displayCountry.innerHTML = country
        displayCondition.innerHTML = condition
        conditionIcon.src = icon
        conditionIcon.style.display = "block"
        conditionResult.innerHTML = condition
        humidityPercentageDisplay.innerHTML = humiditypercentage + '%'
        windspeedDisplay.innerHTML = windSpeed + 'mp/h'
       
    }


};

searchButton.addEventListener('click',()=>{
    weather.fetchData(document.querySelector('#search').value)
    
})



