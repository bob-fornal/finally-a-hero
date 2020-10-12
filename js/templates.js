
const templates = {};

templates.init = (filename, elementIdentifier) => {
  const templateLocation = `/templates/${ filename }`;

  fetch(templateLocation)
    .then(response => response.text())
    .then(html => templates.placeHTML(html, elementIdentifier))
    .catch(err => console.log('Failed to fetch page: ', err));
};

templates.placeHTML = (html, elementIdentifier) => {
  const parser = new DOMParser();
  const parsed = parser.parseFromString(html, 'text/html');

  const content = parsed.querySelector('.import-content');
  const location = document.querySelector(elementIdentifier);

  location.appendChild(content);
};