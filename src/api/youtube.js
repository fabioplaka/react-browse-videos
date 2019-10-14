import axios from 'axios';

const KEY = 'AIzaSyAG59d0bjpwfpeoDkWZBvBS8X4dtiSJyfk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    }
});

