var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return console.log('>> GET request');
    };
    HttpClient.post = function (url, body, options) {
        return console.log('>> POST request', body);
    };
    return HttpClient;
}());
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.runRequest = function () {
        HttpClient.get('http://example.com/api/v1');
        HttpClient.post('http://example.com/api/v1', { password: 'anitalavalatina' }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };
    return App;
}());
new App().runRequest();
