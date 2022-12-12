import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '5d03d150b5e5435ba880e07e934dd012', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
