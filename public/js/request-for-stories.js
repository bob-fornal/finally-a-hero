
const requestForStories = {
  status: false
};

requestForStories.getStatus = async () => {
  const status = await localStorage.getItem('isCollectingStories');
  if (status === null) {
    localStorage.setItem('isCollectingStories', 'false');
  } else {
    requestForStories.status = JSON.parse(status);
  }
  return requestForStories.status;
};

requestForStories.init = async (element, parsed) => {
  const elementItem = parsed.querySelector(element);
  const visible = await requestForStories.getStatus();

  if (visible === true) {
    elementItem.classList.add('visible');
  } else {
    elementItem.classList.remove('visible');
  }
};
