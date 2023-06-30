function toggleMenu(){
    document.querySelector(".ul").classList.toggle("open");
}

const ham = document.querySelector('#ham')

ham.onclick= toggleMenu;