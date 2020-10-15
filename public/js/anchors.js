
const anchor = {};

anchor.navigate = (event, location) => {
  event.preventDefault();
  window.location.replace(location);
  return false;
};
