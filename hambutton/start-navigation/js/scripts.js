function toggleMenu(){
    document.querySelector(".ul").classList.toggle("open");
    console.log("UAU")
}

const ham = document.querySelector('#ham')

ham.onclick= toggleMenu;