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

let points = document.querySelector("#points");
let completed = document.querySelector("#completed");
let uncompleted = document.querySelector("#uncompleted");
let point= 0;
let complete= 0;
let uncomplete= 0;

points.innerHTML=point;
completed.innerHTML=complete;
uncompleted.innerHTML=uncomplete;

function RenderChapter(){
    
    const li= document.createElement('li');
    li.innerHTML= input.value;
    if (input.value != 0){
      const del = document.createElement('button');
      const done= document.createElement('button');
      del.innerHTML="❌"
      done.innerHTML= "✅"
    
      list.appendChild(li);
      li.appendChild(del);
      li.append(done);
      input.value ='';

    
    
      

      del.addEventListener('click', function() {
          li.remove();
          point-=10;
          points.innerHTML=point;
          uncomplete+=1;
          uncompleted.innerHTML=uncomplete;

         
      });
      done.addEventListener('click', function() {
          li.remove();
          point+=10;
          console.log(point)
          points.innerHTML=point;
          complete+=1;
          completed.innerHTML=complete;
      });
    }

}


button.addEventListener('click', RenderChapter);



