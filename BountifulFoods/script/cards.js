const shop = document.querySelector("#shop");
const cards = document.querySelector(".cards")
const x= document.querySelector("#test");
const numOfOrders= document.querySelector("#order");
const shop2 = document.querySelector("#shop2");
let local=0;
local= localStorage.getItem("submissionCount");

numOfOrders.textContent=local.toString();

console.log(local)


shop.addEventListener("click", ()=>{
    cards.classList.add("show");
} )

shop2.addEventListener("click", ()=>{
    cards.classList.add("show");
} )

x.addEventListener("click", ()=>{
    cards.classList.remove("show");

})



