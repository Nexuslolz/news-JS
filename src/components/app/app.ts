import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const startBtn = document.querySelector('.sources') as HTMLButtonElement;
        startBtn.addEventListener('click', (e) =>
            this.controller.getNews(e, (data) => {
                if (typeof data !== 'undefined') {
                    this.view.drawNews(data);
                }
            })
        );
        this.controller.getSources((data) => {
            if (typeof data !== 'undefined') {
                this.view.drawSources(data);
            }
        });
    }
}

export default App;
