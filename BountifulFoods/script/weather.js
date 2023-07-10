let input="Carlsbad";
const weatherIcon= document.querySelector("#iconTemp");
const capttion= document.querySelector("figcaption");
let temperatureInput= document.querySelector("#temperature");
let windspeed= document.querySelector("#speed");
let windchilloutput = document.querySelector("#windchill");
let humidity = document.querySelector("#humidity");



async function getData(input){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=imperial&appid=6eeb60c2a0b2304607c541b011270581`

    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayResult(data);
            displayResult2(data)
            displayResult3(data)
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error)
    }
  
    
}
//Today's forecast
function displayResult(data){
    let tomorrow_forecast = data.list[0];
    // temperatureInput.innerHTML=`${data.main.temp.toFixed(0)}`
    temperatureInput.innerHTML=`${tomorrow_forecast.main.temp.toFixed(0)}`
    const iconsrc = `https://openweathermap.org/img/w/${tomorrow_forecast.weather[0].icon}.png`;
    windspeed.innerHTML=tomorrow_forecast.wind.speed;
    humidity.innerHTML= tomorrow_forecast.main.humidity;

    // console.log(windspeedInput);
    const description= tomorrow_forecast.weather[0].description;
    const descriptionFormatted =description.split(" ");
    const part1 = descriptionFormatted[0].charAt(0).toUpperCase() + descriptionFormatted[0].slice(1);
    
    const part2 = descriptionFormatted[1].charAt(0).toUpperCase() + descriptionFormatted[1].slice(1);
    const countryName= tomorrow_forecast.sys.country;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", description)
    capttion.textContent=`${part1} ${part2}`;
    //checking
    // temperatureInput=44;
   


}

const weatherIcon2= document.querySelector("#iconTemp2");
const capttion2= document.querySelector("#fig2");
let temperatureInput2= document.querySelector("#temperature2");
let windspeed2= document.querySelector("#speed2");
let windchilloutput2 = document.querySelector("#windchill2");
let humidity2= document.querySelector("#humidity2");

//Tomorrow's forecast
function displayResult2(data){
    let tomorrow_forecast = data.list[7];
    // temperatureInput.innerHTML=`${data.main.temp.toFixed(0)}`
    temperatureInput2.innerHTML=`${tomorrow_forecast.main.temp.toFixed(0)}`
    const iconsrc = `https://openweathermap.org/img/w/${tomorrow_forecast.weather[0].icon}.png`;
    windspeed2.innerHTML=tomorrow_forecast.wind.speed;
    humidity2.innerHTML= tomorrow_forecast.main.humidity;

    // console.log(windspeedInput);
    const description= tomorrow_forecast.weather[0].description;
    const descriptionFormatted =description.split(" ");
    const part1 = descriptionFormatted[0].charAt(0).toUpperCase() + descriptionFormatted[0].slice(1);
    
    const part2 = descriptionFormatted[1].charAt(0).toUpperCase() + descriptionFormatted[1].slice(1);
    
    weatherIcon2.setAttribute("src", iconsrc);
    weatherIcon2.setAttribute("alt", description)
    capttion2.textContent=`${part1} ${part2}`;
    //checking
    // temperatureInput=44;
   


}


const weatherIcon3= document.querySelector("#iconTemp3");
const capttion3= document.querySelector("#fig3");
let temperatureInput3= document.querySelector("#temperature3");
let windspeed3= document.querySelector("#speed3");
let humidity3= document.querySelector("#humidity3");


//Aftermorrow forecast
function displayResult3(data){
    let aftermorrow_forecast = data.list[14];
    // temperatureInput.innerHTML=`${data.main.temp.toFixed(0)}`
    temperatureInput3.innerHTML=`${aftermorrow_forecast.main.temp.toFixed(0)}`
    const iconsrc = `https://openweathermap.org/img/w/${aftermorrow_forecast.weather[0].icon}.png`;
    windspeed3.innerHTML=aftermorrow_forecast.wind.speed;
    humidity3.innerHTML= aftermorrow_forecast.main.humidity;

    // console.log(windspeedInput);
    const description= aftermorrow_forecast.weather[0].description;
    const descriptionFormatted =description.split(" ");
    const part1 = descriptionFormatted[0].charAt(0).toUpperCase() + descriptionFormatted[0].slice(1);
    
    const part2 = descriptionFormatted[1].charAt(0).toUpperCase() + descriptionFormatted[1].slice(1);
    const countryName= aftermorrow_forecast.sys.country;
    weatherIcon3.setAttribute("src", iconsrc);
    weatherIcon3.setAttribute("alt", description)
    capttion3.textContent=`${part1} ${part2}`;
    //checking
    // temperatureInput=44;
   


}

getData(input);
