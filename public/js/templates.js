
const templates = {};

templates.init = (filename, elementIdentifier, location = null) => {
  const templateLocation = `/templates/${ filename }`;

  fetch(templateLocation)
    .then(response => response.text())
    .then(html => templates.placeHTML(html, elementIdentifier, location))
    .catch(err => console.log('Failed to fetch page: ', err));
};

templates.placeHTML = (html, elementIdentifier, location) => {
  const parser = new DOMParser();
  const parsed = parser.parseFromString(html, 'text/html');

  if (location !== null) {
    const menuItem = parsed.querySelector(`.${ location }`);
    menuItem.classList.add('active');  
  }

  const content = parsed.querySelector('.import-content');
  const domLocation = document.querySelector(elementIdentifier);

  domLocation.appendChild(content);
};
