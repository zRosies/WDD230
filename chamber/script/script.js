const change = document.lastModified;
const lastup= new Date(change);
const last = lastup.toLocaleString('en-Us')

document.querySelector('#last').textContent=last;

const newdate = new Date();
const year = newdate.getFullYear();

document.querySelector("#year").textContent=year;

const date = new Date();

let opn = { weekday:"long", day:"numeric", month:"long", year:"numeric"};

const formdate= new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	date
);
document.querySelector("#datetime").textContent=formdate;

const hamButton = document.querySelector('#ham');
const navigation = document.querySelector('.navigation2');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});