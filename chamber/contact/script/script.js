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