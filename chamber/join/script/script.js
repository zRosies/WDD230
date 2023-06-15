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

//submission form and userload//

const submit = document.querySelector("#submission");
const form = document.querySelector("#myform")




form.addEventListener("submit", function(event) {
    event.preventDefault();

    // let formData = new FormData(form);
    let positionInput = document.getElementById("position");
    let positionValue = positionInput.value;

    if (positionValue.trim() === "") {
        positionValue="The business position was not filled by the user";
    }

    let positionPattern = /[A-Za-z -]{7,}$/;
    if (!positionPattern.test(positionValue)) {
        positionInput.style.boxShadow = "2px 2px 10px red";
        alert("Please enter a valid position (minimum 7 characters, only letters, spaces, and hyphens allowed).");
        return;
    }

    let currentdateandtime = new Date().toISOString();
    let submitButton = document.getElementById("button");
    submitButton.value = currentdateandtime;

    form.submit();
});



// function submission(event) {
// 	event.preventDefault();

//     let form = document.getElementById("myform");
//     let formData = new FormData(form);
	
//     let currentdateandtime = new Date().toISOString();
//     submit.value = currentdateandtime;
    
//     window.location.href = "thankyou.html";
   
// }

// submit.addEventListener('DOMContentLoaded', function () {
// 	const form = document.getElementById('myform');
// 	const positionInput = document.getElementById('position');

// 	form.addEventListener('submit', function (event) {
// 		if (!positionInput.checkValidity()) {
// 			event.preventDefault(); // Prevent form submission
// 			// Display an error message or perform any other necessary action
// 			console.log('Invalid input. Please enter a valid business position.');
// 		}
// 	});
// });


