const shop = document.querySelector("#shop");
const cards = document.querySelector(".cards")
const x= document.querySelector("#test");


shop.addEventListener("click", ()=>{
    cards.classList.add("show");
} )

x.addEventListener("click", ()=>{
    cards.classList.remove("show");

})



