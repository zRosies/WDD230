const date = new Date();
const year =date.getFullYear();
document.querySelector("#year").innerHTML=year;

const modi = document.lastModified;
const lastupdate = new Date(modi);  
const formtdate = lastupdate.toLocaleString('en-Us');


document.getElementById('last').textContent =  formtdate;


const button = document.querySelector("button");
const list = document.querySelector("#list");
const input= document.querySelector("#favchap");


function RenderChapter(){
    
    const li= document.createElement('li');
    li.innerHTML= input.value;

    const del = document.createElement('button');
    del.innerHTML="❌"
   
    list.appendChild(li)
    li.appendChild(del)
    input.value ='';
    

    del.addEventListener('click', function() {
        li.remove();
      });

}






button.addEventListener('click', RenderChapter);