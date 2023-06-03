const images= document.querySelectorAll("[data-src]");

function preloadImage(img){
    const src=img.getAttribute("data-src");
    if(!src){
        return;
    }
 
    img.src=src;
    img.addEventListener('load', () => {
        img.style.opacity = 1;
        
      });
  
}

const imgOptions={
    threshold:0.5,
    rootMargin: "0px 0px -100px 0px"

};

const imgObserver=new IntersectionObserver((entries, imgObserver)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;

        }
        else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
    

});

// lastupdated

const date = new Date();
const year =date.getFullYear();
document.querySelector("#year").innerHTML=year;

const modi = document.lastModified;
const lastupdate = new Date(modi);  
const formtdate = lastupdate.toLocaleString('en-Us');


document.getElementById('last').textContent =  formtdate;
