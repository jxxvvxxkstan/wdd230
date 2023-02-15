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

// Form
const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
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

// Bussiness Directory

const requestURL = 'data/members.json';
const businesinfo = document.querySelector('.businesscards');

async function getBusinessInfo() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json()
    //console.log(data);
    displayBusinessInfo(data)
    
  } else {
    throw Error(response.statusText);
  }
}


function displayBusinessInfo(members) {
  members.Businessinfo.forEach(business => {
    
    let card = document.createElement("section");
    card.setAttribute("id",business.businessnid);
    let image = document.createElement("img")
    let name = document.createElement("h2"); 


    
    let address  = document.createElement("p");
    let contactNumber  = document.createElement("p");
    let emailAddress  = document.createElement("p");
    let webAddress  = document.createElement("a");
    let memberLevel  = document.createElement("p");

    name.innerHTML = business.businessname;


    let businessImgURL = "images/" + business.companylogo
    image.setAttribute("src", businessImgURL);
    image.setAttribute("alt", `Logo for ${business.businessname}`);
    image.setAttribute("loading", "lazy");


    address.innerHTML = business.address +", " +business.state + " " + business.areacode;
    address.setAttribute("class","physicaladdess");

    contactNumber.innerHTML = `📞: ${business.contactnumer}`;

    emailAddress.innerHTML = `📧: ${business.emailaddress}`;

    /*busWebAddress.innerHTML = `💻: ${business.webaddress}`; */
    webAddress.textContent = `💻: ${business.webaddress}`;
    webAddress.setAttribute("href", business.webaddress);
    webAddress.setAttribute("class","webaddress");

    memberLevel.innerHTML = business.membershiplvl;
    memberLevel.setAttribute("class","membershiplvl webaddressmargin");


    buscard.append(image);
    buscard.append(name);
    buscard.append(industry);
    buscard.append(address);
    buscard.append(contactNumber);
    buscard.append(emailAddress);
    buscard.append(webAddress);
    buscard.append(memberLevel)

    businesinfo.append(card) // appends everything to the .card as declared at the top
  })
}

getBusinessInfo();

/* change display data from grid to list abd visa versa */

const gridbtn = document.querySelector("#gridbtn");
const listbtn = document.querySelector("#listbtn");
const display = document.querySelector("#businesscards");



/*put in grid format */
gridbtn.addEventListener("click", () => {
	display.classList.add("businesscards");
	display.classList.remove("businesscardsList");
});

/*put in List format */
listbtn.addEventListener("click", () => {
	display.classList.add("businesscardsList");
	display.classList.remove("businesscards");
});

/*
  listbtn.setAttribute = ("class","activebutton");
  listbtn.append();
*/