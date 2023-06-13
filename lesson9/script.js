



async function getProphetsData(){
    const url="https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"
    const response= await fetch(url);
    const data = await response.json();
    renderProphet(data);

}


function renderProphet(data){
    const cards = document.querySelector(".cards");
    console.log(data);
    data.prophets.forEach(prophet => {
        
        let card= document.createElement("section");
        let name= document.createElement("p");
        let birthday= document.createElement("p");
        let birthplace= document.createElement("p");
        let image=document.createElement("img");
        let death = document.createElement("p");
        let numOfChildren= document.createElement("p");

        name.textContent=`Name: ${prophet.name} ${prophet.lastname}`;
        birthday.textContent=`Birthdate: ${prophet.birthdate}`;
        birthplace.textContent=`Birthplace: ${prophet.birthplace}`;
        if (prophet.death== null){
              prophet.death='I am alive :D';  
        }
        death.textContent=`Death: ${prophet.death}`;
        numOfChildren.textContent=`{Number of Children: ${prophet.numofchildren}`;

        image.setAttribute("src", prophet.imageurl);
        image.setAttribute("alt", `picture of ${prophet.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", 340);
        image.setAttribute("height", 440);

        // console.log(image)
        card.append(image)
        card.append(name);
        card.append(birthday);
        card.append(birthplace);
        card.append(death)
       
        

        cards.append(card);


    });
   

}

getProphetsData();