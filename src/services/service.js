export default class Service {

    _apiBase = 'http://localhost:9090/api';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    };

    getLastUpdate = async () => {
        const res = await fetch(`${this._apiBase}/last`);
        if (!res.ok) {
            throw new Error(`Could not fetch '/last', received ${res.status}`)
        }
        return await res.text();
    };

    findPageByProductName = async (query, page) => {
        return await this.getResource(`/page/${query}?page=${page}`);
    };

    update = async () => {
        const res = await fetch(`${this._apiBase}/update`);
        if (!res.ok) throw new Error(`Could not fetch '/update', received ${res.status}`);
    };

    getBackEndVersion = async () => {
        return await this.getResource(`/version`);
    };
}
