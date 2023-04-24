{/* <script src="scripts/app.js"></script> */}

// `Current Date: ${dayName}, ${monthName} ${d.getDate()}, ${year}`;

// document.getElementById("#q").innerHTML = ("Welcome to <em>our</em> neighborhood!")

// document.getElementById("#temp").value = gettemperature();

// const divs = document.querySelectorAll('div');

// let filterC= citynames.filter(city => city.charAt(0)=== "C")
// Diff bettwen datetime to LocalString and Console.log


const year = new Date();

// 

//Using LocaleDateString

let opn = { weekday:'short', day:'numeric', month:'short', year:'numeric', hour:'numeric',
minute:'numeric',second:'numeric'};
document.getElementById('time').textContent =  year.toLocaleDateString('en-Us', opn);

//Using Console
let aa = year.getHours();
let bb = year.getMinutes();
let cc = year.getFullYear();
let day = year.getDate();
let month = year.getMonth();
const phrase = `It's ${month}/${day}/${cc}, ${aa}:${bb} minutes, `;
console.log(phrase);

document.getElementById('sec').textContent = phrase


