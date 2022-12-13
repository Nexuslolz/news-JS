interface IDataSource {
    name: string;
    id: string;
    category: string;
    country: string;
    description: string;
    language: string;
    url: string;
}

type DataS = Array<IDataSource>;

export default DataS;
