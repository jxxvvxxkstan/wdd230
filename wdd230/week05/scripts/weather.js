// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const townName = "Trier"
const myKey = "75c45472e0d13c902b2109e083617def"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${townName}&appid=${myKey}&units=imperial`


function displayData(data) {
    console.log(data)
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
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