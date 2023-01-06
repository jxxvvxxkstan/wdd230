const year = document.querySelector('#currentYear')

const lastmodific = document.querySelector('#lastModified');

try {
    year.textContent = new Date().getFullYear();
    lastmodific.textContent = document.lastModified;
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }
