// Toggle Menu

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

// Date Header

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

// Footer Last Updated

const year = document.querySelector('#currentYear')

const lastmodific = document.querySelector('#currentDate');

try {
    year.textContent = new Date().getFullYear();
    lastmodific.textContent = document.lastModified;
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }

// Lazyload
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

// Form
const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

// rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);

// Weather

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const townName = "Porto Alegre, BR"
const myKey = "75c45472e0d13c902b2109e083617def"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${townName}&appid=${myKey}&units=metric`


function displayData(data) {
    // console.log(data)
    currentTemp.innerHTML = `${data.main.temp}&deg;C`
    weatherIcon.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.alt=data.weather[0].main
    captionDesc.innerHTML = data.weather[0].description
}

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // testing only
        displayData(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

// Banner

let d = new Date().getDay();

const banner = document.getElementById("banner");
if (d === 1 || d === 4) {
  banner.style.display = "block";
}
else {
    banner.style.display = "none";
}

const closeBtn = document.getElementById("close");

closeBtn.addEventListener ("click", () => {
  banner.style.display = "none";
});

