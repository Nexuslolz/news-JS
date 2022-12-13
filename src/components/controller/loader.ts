interface IOptions {
    [key: string]: string;
}
type LoaderOptions = IOptions;

interface IStatus {
    ok: boolean;
    status: string | number;
    statusText: string;
    json(): void;
    type: string;
    url: string;
}
type StatusCode = IStatus;

class Loader {
    baseLink: string;
    options: LoaderOptions;

    constructor(baseLink: string, options: LoaderOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        {
            endpoint,
            options = {},
        }: {
            endpoint: string;
            options?: LoaderOptions;
        },
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: StatusCode): StatusCode {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: LoaderOptions, endpoint: string): string {
        const urlOptions: LoaderOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method: string, endpoint: string, callback: <T>(arg?: T) => void, options: LoaderOptions = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
