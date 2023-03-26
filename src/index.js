import './css/styles.css';
import Countries from './modules/fetchCountries';
import {
  renderCountries,
  renderCountrie,
  clearCountries,
} from './modules/renderHtml';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');

const newCountries = new Countries();

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const search = e.target.value.trim();

  clearCountries();

  if (!search) {
    return;
  }

  newCountries.query = search;

  newCountries
    .fetchCountries()
    .then(r => {
      if (r.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.',
          { position: 'center-center' }
        );
        return;
      } else if (r.length > 1) {
        renderCountries(r);
        return;
      } else if ((r.length = 1)) {
        renderCountrie(r[0]);
        return;
      }
    })
    .catch(e => {
      Notify.failure('Oops, there is no country with that name', {
        position: 'center-center',
      });
    });
}
