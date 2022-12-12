interface IData {
    name: string;
    id: string;
    category: string;
    country: string;
    description: string;
    language: string;
    url: string;

    urlToImage: string;
    author: string;
    source: string;
    publishedAt: string;
    title: string;
}

type Data = Array<IData>;

export default Data;
