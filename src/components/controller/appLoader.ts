import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: '5d03d150b5e5435ba880e07e934dd012', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
//https://newsapi.org/v2/
