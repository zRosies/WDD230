


async function loadData(){
    const url = "script/data.json";
    const response = await fetch(url);
    const data = await response.json();
    renderCompany(data)

} 

function renderCompany(data){
    const cards = document.querySelector(".cards");
    console.log(data)
    let count=0;
    data.forEach(company => {

        
        let section = document.createElement("section");
        let image = document.createElement("img");
        let companyname= document.createElement("h1");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let link = document.createElement('a');

        phone.textContent=company.contact;
        companyname.textContent= company.name;
        address.textContent=company.address;
        link.text= company.link;

        image.setAttribute("src", company.url);
        image.setAttribute("alt", `picture of ${company.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", 300);
        image.setAttribute("height", 300);

        link.setAttribute("href", link.textContent);

        section.appendChild(companyname);
        section.appendChild(image)
        section.appendChild(address);  
        section.appendChild(phone);
        section.appendChild(link);

        if (count%2==0){
            section.setAttribute("class",'bc1')

        }
        else{
            section.setAttribute("class", "bc2" )

        }


        cards.appendChild(section)
        count ++;
        
    });

    

}

loadData();

// Grid and List

const grid = document.querySelector(".grid");
const list = document.querySelector(".list");
const elements = document.querySelector(".cards");


list.addEventListener("click", ()=>{

    elements.classList.add('list');

})

grid.addEventListener("click",()=>{

    elements.classList.remove("list")
})