const API_KEY = 'b1e8475315e4519e6a3f2d11108671f4';
const BASE_URL = 'https://api.themoviedb.org/3/';

const ORIGINALS_URL = `discover/tv?api_key=${API_KEY}&with_networks=213`
const ACTION_URL = `discover/movie?api_key=${API_KEY}&with_genres=28`
const HORROR_URL = `discover/movie?api_key=${API_KEY}&with_genres=27`
const COMEDY_URL = `discover/movie?api_key=${API_KEY}&with_genres=99`
export{
    API_KEY,
    BASE_URL,
    ORIGINALS_URL,
    ACTION_URL,
    HORROR_URL,
    COMEDY_URL,

}