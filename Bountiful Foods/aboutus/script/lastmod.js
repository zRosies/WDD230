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

function toggleMenu(){
	document.querySelector("nav").classList.toggle("open");
	// let navigation = document.querySelector("nav")
    // navigation.classList.toggle("open");
	console.log("AAA")
}

const button = document.querySelector('#ham')

button.onclick= toggleMenu;


//'Image observer'

const pictures = document.querySelectorAll(".picture");

function applyEffectsOnScroll() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  if (windowWidth < 880) { 
    pictures.forEach(picture => {
      const pictureTop = picture.getBoundingClientRect().top;

      if (pictureTop < windowHeight * 0.5) {
        picture.querySelector("img").style.filter = "grayscale(0%)";
        picture.querySelector(".middle").style.opacity = 1;
        picture.querySelector(".middle").style.width = "300px";
      }
    });
  }
}

window.addEventListener("scroll", applyEffectsOnScroll);