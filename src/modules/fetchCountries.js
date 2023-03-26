import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default class Countries {
  constructor() {
    this.searchQuery = '';
  }

  fetchCountries() {
    const param = new URLSearchParams({
      fields: ['name', 'capital', 'population', 'flags', 'languages'],
    });

    const url = `https://restcountries.com/v3.1/name/${this.searchQuery}?${param}`;

    return fetch(url).then(r => {
      if (!r.ok) {
        throw new Error(r.status);
      }
      return r.json();
    });
    //   .catch(e => {
    //     Notify.warning(
    //       'Too many matches found. Please enter a more specific name.',
    //       { position: 'center-center' }
    //     );
    //   });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
