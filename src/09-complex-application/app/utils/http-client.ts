import Axios from 'axios';

export class HttpClient {
    get(url:string):any {
        return Axios.request(HttpClient.configureRequest(url,'get'));
    }
    post(url:string, body:any|null):any {
        return Axios.request(HttpClient.configureRequest(url,'post',body));
    }

    static configureRequest(url:string,method:string, data:object = null) {
        return {
            url: url,
            method:method,
            responseType:'json',
            data:data,
            header: {
                'Content-Type':'application/json'
            }
        }
    }
}