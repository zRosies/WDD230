
// let weatherimg=document.querySelector("");
let temperatureInput= document.querySelector("#temperature");
let windspeedInput= document.querySelector("#windspeed");
let windchilloutput = document.querySelector("#windchill");

temperatureInput.textContent= 5;
windspeedInput.textContent=5;

console.log(temperatureInput);

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


windchilloutput.textContent=calculateWindChill(temperatureInput.textContent,windspeedInput.textContent);

// temperatureInput.addEventListener("input", function() {
 
//     let temperature=parseFloat(temperatureInput.value) ;
//     let windspeed= parseFloat(windspeedInput.value);
//     windchilloutput.innerHTML= calculateWindChill(temperature, windspeed);

// });
  
// windspeedInput.addEventListener("input", function() {

//     let temperature=parseFloat(temperatureInput.value) ;
//     let windspeed= parseFloat(windspeedInput.value);
//     windchilloutput.innerHTML=calculateWindChill(temperature, windspeed);

// });


// windchilloutput.innerHTML=calculateWindChill(temperature,windspeed);