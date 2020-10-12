
const scramble = {};

scramble.init = () => {
  scramble.cover = document.createElement('div');
  scramble.cover.classList.add('cover-wrapper');
  
  const body = document.querySelector('body');
  body.appendChild(scramble.cover);

  const inner = document.createElement('div');
  inner.classList.add('cover-content');
  
  const images = [
    'google-header.png',
    'coffee-wikipedia.png',
    'coffee-nca.png',
    'coffee-amazon.png'
  ];
  for (let image of images) {
    const imageLocation = `images/scramble/${ image }`;
    const imgWrapper = document.createElement('div');
    const img = document.createElement('img');
    img.src = imageLocation;
    imgWrapper.appendChild(img);
    inner.appendChild(imgWrapper);
  }

  const exit = document.createElement('div');
  exit.classList.add('exit-scramble');
  exit.innerText = 'EXIT';
  exit.onclick = scramble.trigger;
  inner.appendChild(exit);
  
  scramble.cover.appendChild(inner);
};

scramble.trigger = () => {
  const state = [...scramble.cover.classList].includes('visible');
  
  if (state === true) {
    console.log('visible ...');
    scramble.cover.classList.remove('visible');
    console.log('not visible ...');
  } else {
    console.log('not visible ...');
    scramble.cover.classList.add('visible');
    console.log('visible ...');
  }
};
