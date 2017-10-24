import axios from './axios';

export default class API {

    static getRepos(username) {
        return axios.get(`/${username}/repos`);
    }

}