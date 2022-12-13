import Loader from './loader';

enum UrlConstruct {
    url = 'https://nodenews.up.railway.app/',
    apiKey = '5d03d150b5e5435ba880e07e934dd012',
}

class AppLoader extends Loader {
    constructor() {
        super(UrlConstruct.url, {
            apiKey: UrlConstruct.apiKey, // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
//https://newsapi.org/v2/
