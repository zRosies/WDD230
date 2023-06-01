const imagesThatLoad = document.querySelectorAll("[data-src]");

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));

  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

imagesThatLoad.forEach((img) => {
  loadImages(img);
});

if ("IntersectionObserver" in window) {
  let observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });

  imagesThatLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesThatLoad.forEach((img) => {
    loadImages(img);
  });
}