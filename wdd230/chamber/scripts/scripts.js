// toggle menu

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

// date header

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

// footer last updated

const year = document.querySelector('#currentYear')

const lastmodific = document.querySelector('#currentDate');

try {
    year.textContent = new Date().getFullYear();
    lastmodific.textContent = document.lastModified;
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }