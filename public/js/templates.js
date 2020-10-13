
const templates = {};

templates.init = (filename, elementIdentifier, callback = null) => {
  const templateLocation = `/templates/${ filename }`;
  templates.initFetch(templateLocation, elementIdentifier, callback);
};

templates.initBody = (name, elementIdentifier, callback = null) => {
  const templateLocation = `/templates/bodies/body.${ name }.html`;
  templates.initFetch(templateLocation, elementIdentifier, callback);
};


templates.initFetch = (templateLocation, elementIdentifier, callback = null) => {
  fetch(templateLocation)
    .then(response => response.text())
    .then(html => templates.placeHTML(html, elementIdentifier, callback))
    .catch(err => console.log('Failed to fetch page: ', err));
};

templates.placeHTML = (html, elementIdentifier, callback) => {
  const parser = new DOMParser();
  const parsed = parser.parseFromString(html, 'text/html');

  if (callback !== null) {
    callback(parsed);
  }

  const content = parsed.querySelector('.import-content');
  const domLocation = document.querySelector(elementIdentifier);

  domLocation.parentNode.replaceChild(content, domLocation);
};

templates.initMenu = (location) => {
  let navCallback = (parsed) => {
    const menuItem = parsed.querySelector(`.${ location }`);
    menuItem.classList.add('active');
  };

  templates.init('navigation.html', '.nav-wrapper', navCallback);
};
