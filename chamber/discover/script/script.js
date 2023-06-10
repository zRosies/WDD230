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
document.querySelector("#datetime").textContent=formdate;

const hamButton = document.querySelector('#ham');
const navigation = document.querySelector('.navigation2');
const closea = document.querySelector("#close");

//navigation
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
	if (navigation.classList.contains('responsive')) {
		// hamButton.style.display = 'none';
		let aa = 'x';
		hamButton.style.fontSize = '2.5em';
		hamButton.style.boxShadow ='1px 1px 20px #FFC300' 
		hamButton.innerHTML =  aa;
	  } else {
		hamButton.style.boxShadow ='none' 
		hamButton.innerHTML = "&#9776";
	  }
});

const banner = document.querySelector("#banner");

if(getday == 1 || getday == 2){
	banner.style.display='block';
}


//main

var slides = document.getElementsByClassName('im1');

// Set initial slide index
var currentSlideIndex = 0;

//imgObserver

const images= document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
	
	const paragraphs = document.querySelectorAll("section div p");
 
    img.src = src;
    img.addEventListener('load', () => {
        img.style.opacity = 1;
		
        paragraphs.forEach((p) => {
            p.style.opacity = 1;
        });
    });
}

const imgOptions={
    threshold:0.5,
    rootMargin: "0px 0px 100px 0px"

};

const imgObserver=new IntersectionObserver((entries, imgObserver)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;

        }
        else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
    

});

// Number of visits

const visits = document.querySelector("#visits");
let lastVisitDate = window.localStorage.getItem("lastVisitDate");
let daysSinceLastVisit;




if (lastVisitDate) {
  lastVisitDate = new Date(lastVisitDate);

  const timeDifference = new Date() - lastVisitDate;
  
    //CHECK the amount of days by adding a fixed(miliseconds) number to timeDifference below
    //ex 10000 = +-24hours
  daysSinceLastVisit = Math.round(timeDifference / (24 * 60 * 60 * 1000));
  console.log(daysSinceLastVisit)
} else {
  daysSinceLastVisit = 0;
}


visits.textContent = daysSinceLastVisit;



window.localStorage.setItem("lastVisitDate", new Date().toISOString());