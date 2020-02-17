import axios from 'axios';
const url = 'http://www.mocky.io/v2/5e3d41272d00003f7ed95c09';

let client = axios.create({
    url: url,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
});

export default client;
