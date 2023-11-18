import Axios from 'axios'
import { BASE_URL } from '../Constants'


let instance =  Axios.create({
    baseURL: BASE_URL

  });

export default instance;