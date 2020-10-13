
const scramble = {};

scramble.init = () => {
  scramble.cover = document.createElement('div');
  scramble.cover.classList.add('cover-wrapper');
  
  const body = document.querySelector('body');
  body.appendChild(scramble.cover);

  const inner = document.createElement('div');
  inner.classList.add('cover-content');
  
  const images = [
    { file: 'google-header.png', location: 'https://www.google.com/search?q=coffee&oq=coffee' },
    { file: 'coffee-wikipedia.png', location: 'https://en.wikipedia.org/wiki/Coffee' },
    { file: 'coffee-nca.png', location: 'https://www.ncausa.org/About-Coffee/What-is-Coffee' },
    { file: 'coffee-benefits.png', location: 'https://www.medicalnewstoday.com/articles/270202' },
    { file: 'coffee-amazon.png', location: 'https://www.amazon.com/coffee/s?k=coffee' },
    { file: 'coffee-peets.png', location: 'https://www.peets.com/coffee' },
    { file: 'coffee-stumptown.png', location: 'https://www.stumptowncoffee.com/' },
    { file: 'coffee-footer.png', location: 'https://www.google.com/search?q=coffee&oq=coffee' }
  ];
  for (let image of images) {
    const imageLocation = `images/scramble/${ image.file }`;
    const imgWrapper = document.createElement('div');
    
    const anchor = document.createElement('a');
    anchor.setAttribute('href', image.location);
    
    const img = document.createElement('img');
    img.setAttribute('src', imageLocation);
    
    anchor.appendChild(img);
    imgWrapper.appendChild(anchor);
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
