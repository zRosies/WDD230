
const currentTemp= document.querySelector("#current-temp");
const weatherIcon= document.querySelector("#weather-icon");
const capttion = document.querySelector("figcaption");
let place = document.querySelector("#place");
let country= document.querySelector("#country")

let input ="Fairbanks";

place.textContent=input;


let cities = "Fairbanks";
let units = "imperial"




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

getData(input);


function displayResult(data){
    currentTemp.innerHTML=`${data.main.temp.toFixed(0)}`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const description= data.weather[0].description;
    const descriptionFormatted =description.split(" ");
    const part1 = descriptionFormatted[0].charAt(0).toUpperCase() + descriptionFormatted[0].slice(1);
    
    const part2 = descriptionFormatted[1].charAt(0).toUpperCase() + descriptionFormatted[1].slice(1);
    const countryName= data.sys.country;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", description)
    capttion.textContent=`${part1} ${part2}`;
    country.textContent=countryName
    


}

input = document.querySelector("#city");

input.addEventListener("input", function(){
    place.textContent=input.value;
    let city=`${input.value}`
    console.log(city);
    getData(city);
    const country= input.text;
});