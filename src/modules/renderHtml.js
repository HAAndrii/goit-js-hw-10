const renderCountries = arr => {
  const list = document.querySelector('.country-list');
  list.style.display = 'flex';
  list.style.flexDirection = 'column';
  const countrie = arr.map(({ flags, name: { official } }) => {
    const li = document.createElement('li');
    li.style.listStyleType = 'none';
    li.style.height = '50px';
    li.style.paddingBottom = '10px';

    const img = document.createElement('img');
    img.style.display = 'inline';
    img.style.paddingRight = '10px';

    img.src = flags.png;
    img.alt = flags.alt;
    img.width = '50';
    li.append(img);

    const title = document.createElement('h2');
    title.textContent = official;
    title.style.display = 'inline';
    li.append(title);

    return li;
  });

  list.append(...countrie);
};

const renderCountrie = ({
  capital,
  population,
  flags,
  languages,
  name: { official },
}) => {
  const info = document.querySelector('.country-info');
  info.style.display = 'flex';
  info.style.flexDirection = 'column';

  const img = document.createElement('img');
  img.style.display = 'inline';
  img.style.paddingRight = '10px';
  img.src = flags.png;
  img.alt = flags.alt;
  img.width = '50';
  info.append(img);

  const title = document.createElement('h2');
  title.textContent = official;
  title.style.display = 'inline';
  info.append(title);

  const capitalEl = document.createElement('h2');
  capitalEl.textContent = `Capital: ${capital}`;
  info.append(capitalEl);

  const populationEl = document.createElement('h2');
  populationEl.textContent = `Population: ${population}`;
  info.append(populationEl);

  const languagesEl = document.createElement('h2');
  languagesEl.textContent = `languages: ${Object.values(languages).join()}`;
  info.append(languagesEl);

  //info.append(...countrie);
};

const clearCountries = () => {
  const list = document.querySelector('.country-list');
  list.innerHTML = '';
  const info = document.querySelector('.country-info');
  info.innerHTML = '';
};

export { renderCountries, renderCountrie, clearCountries };
