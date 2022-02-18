let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onLoad = () => {
    image.removeAttribute("data-src");
  };
};

// imagesToLoad.forEach((img) => {
//   loadImages(img);
// });

if ("IntersectionObserver" in window) {
  let options = {
    rootMargin: "0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, options);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
