class HttpClient {
    static get(url:string, options:object = {}): any{
        return console.log('>> GET request');
    }
    static post(url:string, body:any | null, options?:object):any{
    return console.log('>> POST request',body);
    }
}

class App{
    runRequest(){
        HttpClient.get('http://example.com/api/v1');
        HttpClient.post('http://example.com/api/v1',{password:'anitalavalatina'},{
            headers: {
                'Content-Type':'application/json'
            }
        });
    }
}

new App().runRequest();