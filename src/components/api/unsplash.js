import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers :{
        Authorization: 'Client-ID 8656b15dc56e7f7ee042ce5ce5128da4e602f20b3ecb60f3f05b1119d97a6934'
    }
});