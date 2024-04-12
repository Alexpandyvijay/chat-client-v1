import axios from 'axios';
import { Storage } from './storage';

export default class HTTP {

    token;

    static async call(path, params, tokenFlag = true) {

        const http = new HTTP();

        return http.call(path, params, tokenFlag);
    }

    async call(path, params, tokenFlag) {

        let res,baseUrl;

        let options = {};

        let access_token = Storage.get('access_token');

        if(!access_token || access_token?.exp * 1000 > Date.now()) {
            
            let access_token
        }

        if(tokenFlag) {
            options.headers = {
                authorization :{
                    access_token: `Bearer ${this.access_token}`
                }
            }
        }

        if(params instanceof FormData) {
            baseUrl = path;
            res = await axios.post(baseUrl, params, options);
        }

        if(params instanceof URLSearchParams){
            baseUrl = path+params.toString();
            res = await axios.get(baseUrl, options);
        }

        return res;
    }
}