
const login = {
  keys: {
    collectingStories: 'isCollectingStories',
    login: 'isLoggedIn'
  },

  state: false,
  user: null,
  collectingStories: false,

  form: null,
  admin: null
};

login.init = async () => {
  login.form = document.querySelector('.login-form');
  login.admin = document.querySelector('.admin-page');  
  await login.setState();
};

login.setState = async () => {
  login.user = await localStorage.getItem(login.keys.login);
  login.state = (login.user !== null);

  const collectingStories = await localStorage.getItem(login.keys.collectingStories);
  if (collectingStories === null) {
    await localStorage.setItem(login.keys.collectingStories, false);
  } else {
    login.collectingStories = JSON.parse(collectingStories);
  }

  if (login.state === true) {
    login.form.classList.remove('visible');
    login.admin.classList.add('visible');
    login.showData();
  } else {
    login.form.classList.add('visible');
    login.admin.classList.remove('visible');
  }
};

login.showData = () => {
  const userField = document.querySelector('.field.user');
  const collectingStoriesField = document.querySelector('.field.collecting-stories');

  userField.innerText = login.user;
  collectingStoriesField.value = '' + (login.collectingStories);
};

login.process = async () => {
  const usernameField = document.querySelector('[name=uname]');
  const passwordField = document.querySelector('[name=psw]');

  const username = usernameField.value;
  const password = passwordField.value;

  if (username.length > 0 && password.length > 0) {
    usernameField.value = '';
    passwordField.value = '';
    await localStorage.setItem(login.keys.login, username);
    await login.setState();
  }
};

login.saveAndLogout = async () => {
  const collectingStoriesField = document.querySelector('.field.collecting-stories');
  const collectingStories = JSON.parse(collectingStoriesField.value);
  await localStorage.setItem(login.keys.collectingStories, collectingStories);

  await localStorage.removeItem(login.keys.login);
  await login.setState();
};
