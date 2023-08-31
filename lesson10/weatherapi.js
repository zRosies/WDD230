
const currentTemp= document.querySelector("#current-temp");
const weatherIcon= document.querySelector("#weather-icon");
const capttion = document.querySelector("figcaption");
let place = document.querySelector("#place");
let country= document.querySelector("#country");
let humidity= document.querySelector("#humidity");
let windspeed= document.querySelector("#windspeed");
let temp = document.querySelector("#windchill");
let flagIcon= document.querySelector("#flag");

let input ="Rio de Janeiro";






let cities = "Fairbanks";
let units = "imperial"


function calculateWindChill(temperature, windspeed){
    let f=0;
    if(temperature <= 60 && windspeed > 3){
        f= 35.74 + (0.6215*temperature) - 35.65*(windspeed**0.16)+((0.4275*temperature)*(windspeed**0.16));
        f= `${f.toFixed(2)}  &deg; F`

    }
    else{
        f= "N/A"
    }
    return f
}


async function flag(flagTag){
    const apiUrl=`https://flagsapi.com/${flagTag}/flat/64.png`
    flagIcon.setAttribute("src", apiUrl);
    flagIcon.setAttribute("alt", "flag");
}

async function getData(input){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=6eeb60c2a0b2304607c541b011270581`

    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            // console.log(data);
            displayResult(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error)
    }
  
    
}

getData(input);


function displayResult(data){
    currentTemp.innerHTML=`${data.main.temp.toFixed(0)}`;
   
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const description= data.weather[0].description;
    const descriptionFormatted =description.split(" ");
    const part1 = descriptionFormatted[0].charAt(0).toUpperCase() + descriptionFormatted[0].slice(1);
    
    const part2 = descriptionFormatted[1].charAt(0).toUpperCase() + descriptionFormatted[1].slice(1);
    const countryName= data.sys.country;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", description)
    capttion.textContent=`${part1} ${part2}`;
    country.textContent=countryName;
    humidity.textContent= data.main.humidity;
    windspeed.innerHTML= data.wind.speed;
    const tempMod= data.main.temp;
    const windMod= data.wind.speed;
    place.innerHTML=data.name;
    
    
   
    temp.innerHTML=calculateWindChill(tempMod,windMod);
    flag(countryName);
   
    
    
    


}

input = document.querySelector("#city");

input.addEventListener("change", function(){
    place.textContent=input.value;
    let city=`${input.value}`;
    // console.log(city);
    getData(city);
    const country= input.text;
});