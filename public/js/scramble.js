
const scramble = {};

scramble.init = () => {
  scramble.cover = document.createElement('div');
  scramble.cover.classList.add('cover-wrapper');
  
  const body = document.querySelector('body');
  body.appendChild(scramble.cover);

  const inner = document.createElement('div');
  inner.classList.add('cover-content');
  
  const images = [
    { file: 'google-header.webp', location: 'https://www.google.com/search?q=coffee&oq=coffee' },
    { file: 'coffee-wikipedia.webp', location: 'https://en.wikipedia.org/wiki/Coffee' },
    { file: 'coffee-nca.webp', location: 'https://www.ncausa.org/About-Coffee/What-is-Coffee' },
    { file: 'coffee-benefits.webp', location: 'https://www.medicalnewstoday.com/articles/270202' },
    { file: 'coffee-amazon.webp', location: 'https://www.amazon.com/coffee/s?k=coffee' },
    { file: 'coffee-peets.webp', location: 'https://www.peets.com/coffee' },
    { file: 'coffee-stumptown.webp', location: 'https://www.stumptowncoffee.com/' },
    { file: 'coffee-footer.webp', location: 'https://www.google.com/search?q=coffee&oq=coffee' }
  ];
  for (let image of images) {
    const imageLocation = `images/scramble/${ image.file }`;
    const imgWrapper = document.createElement('div');
    
    const anchor = document.createElement('a');
    anchor.setAttribute('href', '#');
    anchor.setAttribute('onclick', `anchor.navigate(event, '${ image.location }')`);
    
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
    scramble.cover.classList.remove('visible');
    scramble.cover.scrollTop = 0;
  } else {
    scramble.cover.classList.add('visible');
    scramble.cover.scrollTop = 0;
  }
};
