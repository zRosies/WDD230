async function loadData(){
    const url= "script/data.json";
    const response = await fetch(url);
    const data= await response.json();
    RenderInfo(data);
    
}

function RenderInfo(data){
    const container= document.querySelector("#options");
   
    // console.log(data)
    data.forEach(fruit => {

        let name = fruit.name;
        let options = document.querySelector("#userchoices1");
        let options2 = document.querySelector("#userchoices2");
        let options3 = document.querySelector("#userchoices3");
        let option = document.createElement("option");
        let option2 = document.createElement("option");
        let option3 = document.createElement("option");
        option.text = name;
        option2.text = name;
        option3.text = name;

        options.appendChild(option);
        options2.appendChild(option2);
        options3.appendChild(option3);
    });
}

//form stuff
const form = document.querySelector("form");
const info = document.querySelector(".information");
const nameSpan = document.getElementById("namef");
const emailSpan = document.getElementById("emailf");
const phoneSpan=document.querySelector("#phonef");
const fruitSpan=document.querySelector("#fruitf");
const intructionSpan=document.querySelector("#instructionf");
const fruit1=document.querySelector("#fruit1");
const fruit2=document.querySelector("#fruit2");
const fruit3=document.querySelector("#fruit3");
const DateSpan=document.querySelector("#date");
const nameb= document.querySelector("#nameb");


let submissionCount= localStorage.getItem("submissionCount");
if (!submissionCount) {
    submissionCount = 0;
  } else {
    submissionCount = parseInt(submissionCount);
}

const getDatep= new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	date
);

form.addEventListener("submit",function(event){
    event.preventDefault();

    const name=document.querySelector("#name");
    const email= document.querySelector("#email");
    const phone= document.querySelector("#number");
    const op1= document.querySelector("#userchoices1");
    const op2= document.querySelector("#userchoices2");
    const op3= document.querySelector("#userchoices3");
    const instruction = document.querySelector("#instruction");
   

    nameb.textContent= name.value;
    fruit1.textContent= `${op1.value}`;
    fruit2.textContent=`${op2.value}`;
    fruit3.textContent=`${op3.value}`
    nameSpan.textContent=name.value;
    emailSpan.textContent=email.value;
    phoneSpan.textContent=phone.value;
    intructionSpan.textContent= instruction.value;
    DateSpan.textContent=getDatep;

    Calculation()
    submissionCount++;
    localStorage.setItem('submissionCount', submissionCount.toString());

    form.reset();
    form.style.display="none";
    info.style.display="block";


})
// 

async function Calculation(op1, op2, op3){
    const url= "script/data.json";
    const response = await fetch(url);
    const data= await response.json();
    CalculateNutri(data);
    
}

function CalculateNutri(data){
    let carbohydratesTotal=0;
    let sugarTotal= 0;
    let proteinTotal=0;
    let fatTotal=0;
    let caloriesTotal=0;
    
    console.log(fruit2);
    console.log(fruit3);

    data.forEach(fruit => {
        // console.log(fruit.name);
        // console.log(fruit1.textContent);
        let calories = fruit.nutritions.calories;
        let carbohydrates= fruit.nutritions.carbohydrates;
        let fat= fruit.nutritions.fat;
        let protein= fruit.nutritions.protein;
        let sugar= fruit.nutritions.sugar;
        if(fruit.name==fruit1.textContent || fruit.name == fruit2.textContent|| fruit.name == fruit3.textContent){
            caloriesTotal=calories+caloriesTotal;
            carbohydratesTotal=carbohydrates+carbohydratesTotal;
            fatTotal=fat+fatTotal;
            proteinTotal+=protein;
            sugarTotal+=sugar;

        }
    })
    const carbovalue= document.querySelector("#carb");
    const proteinvalue= document.querySelector("#protein");
    const fatbovalue= document.querySelector("#fat");
    const sugarbovalue= document.querySelector("#sugar");
    const caloriesvalue= document.querySelector("#calories");

    carbovalue.textContent=`${carbohydratesTotal.toFixed(2)}`;
    proteinvalue.textContent=`${proteinTotal.toFixed(2)}`;
    fatbovalue.textContent=`${fatTotal.toFixed(2)}`;
    sugarbovalue.textContent=`${sugarTotal.toFixed(2)}`;
    caloriesvalue.textContent=caloriesTotal.toFixed(2);

}
//     let options = document.querySelector("#userchoices1");
   
    // console.log(data)
    // data.forEach(fruit => {

    //     let name = fruit.name;
    //     let options = document.querySelector("#userchoices1");
    //     let options2 = document.querySelector("#userchoices2");
    //     let options3 = document.querySelector("#userchoices3");
    //     let option = document.createElement("option");
    //     let option2 = document.createElement("option");
    //     let option3 = document.createElement("option");
    //     option.text = name;
    //     option2.text = name;
    //     option3.text = name;

    //     options.appendChild(option);
    //     options2.appendChild(option2);
    //     options3.appendChild(option3);
    // }

loadData();
