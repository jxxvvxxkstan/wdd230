// hamburger button
const hamburgerButton = document.querySelector('header button')
const navBar = document.querySelector('nav')

hamburgerButton.addEventListener('click', ()=>{
    navBar.classList.toggle('open')
})

// dark mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector(".card");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🖤")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🤍 Light Mode";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🖤 Dark Mode";
	}
});

// lazyload
let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image)=>{
    image.setAttribute("src",image.getAttribute("data-src"));
    image.onload = () => {
      image.removeAttribute("data-src");
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }