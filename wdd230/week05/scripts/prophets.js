const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject)
    const prophets=jsonObject["prophets"];
    prophets.forEach(displayProphets)
});


function displayProphets(prophet){
   let card=document.createElement("section");
   let heading=document.createElement("h2");
   let paragraph=document.createElement("p");
   let paragraph2=document.createElement("p");
   let portrait=document.createElement("img");

    heading.textContent=`${prophet.name} ${prophet.lastname}`;
    paragraph.textContent=`Date of Birth: ${prophet.birthdate}`;
    paragraph2.textContent=`Place of Birth: ${prophet.birthplace}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th  Latter-day President`);
    portrait.setAttribute('loading','lazy');

    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(paragraph2);
    card.appendChild(portrait);
    

    document.querySelector('div.cards').appendChild(card);
}