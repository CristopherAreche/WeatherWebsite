//This is a boject that will storage the functions and variables that are gonna be necesary for the use fo the API.
let weather ={
    "apiKey": "5f974027b05b271a975e72072f744181",

    fetchWeather: function(city){
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data)=> this.displayWeather(data));
    },

//Esta funcion esta asignando los atributos de la API a variables.
    displayWeather: function(data){
        const {name}=data;
        const {icon, description}=data.weather[0];
        const {temp, humidity}=data.main;
        const {speed}=data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src ="http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.styles.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function (){
        this.fetchWeather (document.querySelector(".search-bar").value);
    }
};

//make the search bar works
document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

//input box to make the ENTER key works
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather()
