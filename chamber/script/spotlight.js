var slides = document.getElementsByClassName('im1');

// Set initial slide index
var currentSlideIndex = 0;


async function loadData(){
    const url = "script/data.json";
    const response = await fetch(url);
    const data = await response.json();
    renderCompany(data)

} 

function renderCompany(data){
    console.log(data)
    let count=0;

    data.forEach(company => {


        let image = document.createElement("img");
        let companyName= company.name;


		if(companyName=="iFood"){
			const photo1=document.querySelector("#photo1");
			photo1.setAttribute("srcset", company.url )
			image.setAttribute("alt", `picture of ${company.name}`);

		}
		else if (companyName=="IBM"){
			const photo2=document.querySelector("#photo2");
			photo2.setAttribute("src", company.url )
			image.setAttribute("alt", `picture of ${company.name}`);


		}
		else if (companyName=="Wanderlust Tours"){
			const photo3=document.querySelector("#photo3");
			photo3.setAttribute("src", company.url )
			image.setAttribute("alt", `picture of ${company.name}`);

		}


    });



}

loadData();