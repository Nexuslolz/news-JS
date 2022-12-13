import News from './news/news';
import Sources from './sources/sources';
import DataSource from './dataSource';
import DataNews from './dataNews';

interface IMainData {
    status: string;
    sources: DataSource;
    articles?: DataNews;
}

type Data = IMainData;

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: Data): void {
        const values: DataNews = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data?: Data): void {
        const values: DataSource = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
export type { Data };
