const API_KEY = '38322370-cd2680a408cbe7ab4bd12cfc4';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(inputValue, page) {
  const url = `${BASE_URL}?q=${inputValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Something wrong with ${inputValue}`));
  });
}
