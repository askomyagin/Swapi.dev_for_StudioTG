import axios from 'axios';

const _apiBase = 'https://swapi.dev/api';
const _imageBase = 'https://starwars-visualguide.com/assets/img';

const commonHeaders = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
};

export const makeGetRequest = async (path, url = false) => {
    if (url)
        return await axios.get(`${path}`, {
            headers: commonHeaders,
        });
    else {
        return await axios.get(`${_apiBase}${path}`, {
            headers: commonHeaders,
        });
    }
};
