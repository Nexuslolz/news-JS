interface IDataAdd {
    name: string;
    id: string;
}
type DataAdd = IDataAdd;

interface IDataNews {
    urlToImage: string;
    author: string;
    source: DataAdd;
    publishedAt: string;
    title: string;
    url: string;
    description: string;
}

type DataN = Array<IDataNews>;

export default DataN;
