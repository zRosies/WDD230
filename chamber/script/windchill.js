
// let weatherimg=document.querySelector("");
let temperatureInput= document.querySelector("#temperature");
let windspeedInput= document.querySelector("#windspeed");
let windchilloutput = document.querySelector("#windchill");



console.log(windspeedInput);

function calculateWindChill(temperature, windspeed){
    let f=0
if(temperature <= 50 && windspeed > 3){
    f= 35.74 + (0.6215*temperature) - 35.65*(windspeed**0.16)+((0.4275*temperature)*(windspeed**0.16));
    f= `${f.toFixed(2)} km/h`

}
else{
    f= "N/A"
}
return f
}




//Weather API

//Check the windchil by choosing a place where the temperature is below 50f such as Norilsk or Barrow;
let input="Rio de Janeiro";
const weatherIcon= document.querySelector("#iconTemp");
const capttion= document.querySelector("figcaption");


async function getData(input){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=6eeb60c2a0b2304607c541b011270581`

    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data);
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

function displayResult(data){
    temperatureInput.innerHTML=`${data.main.temp.toFixed(0)}`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    windspeedInput.textContent=data.wind.speed;
    console.log(windspeedInput);
    const description= data.weather[0].description;
    const descriptionFormatted =description.split(" ");
    const part1 = descriptionFormatted[0].charAt(0).toUpperCase() + descriptionFormatted[0].slice(1);
    
    const part2 = descriptionFormatted[1].charAt(0).toUpperCase() + descriptionFormatted[1].slice(1);
    const countryName= data.sys.country;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", description)
    capttion.textContent=`${part1} ${part2}`;
    //checking
    // temperatureInput=44;
    windchilloutput.textContent=calculateWindChill(temperatureInput.innerHTML, windspeedInput.textContent);


}

getData(input);
