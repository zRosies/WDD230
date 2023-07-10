const change = document.lastModified;
const lastup= new Date(change);
const last = lastup.toLocaleString('en-Us')

document.querySelector('#last').textContent=last;

const newdate = new Date();
const year = newdate.getFullYear();
const getday= newdate.getDay();

document.querySelector("#year").textContent=year;

const date = new Date();

let opn = { weekday:"long", day:"numeric", month:"long", year:"numeric"};

const formdate= new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	date
);

//navigation
// document.querySelector("#datetime").textContent=formdate;

// const hamButton = document.querySelector('#ham');

// const closea = document.querySelector("#close");


function toggleMenu(){
	document.querySelector("nav").classList.toggle("open");
	// let navigation = document.querySelector("nav")
    // navigation.classList.toggle("open");
	console.log("AAA")
}

const button = document.querySelector('#ham')

button.onclick= toggleMenu;

//fruits

//fruits


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
let slideIndex = 1;

if (windowWidth < 667) { 
  showDivs(slideIndex);
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mypic");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}

