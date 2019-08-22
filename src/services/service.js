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

    findAllByProductName = async (query) => {
        return await this.getResource(`/find/${query}`);
    };

    getTest = () => {
        return [
            {
                vendorCode: '1000.1000.1000',
                nameProduct: 'asda sdfasdf asfas dfas dfas fas  fdsf asfdsad fadf asdf',
                price: 100.11
            }, {
                vendorCode: '2000.2000.2000',
                nameProduct: 'asda sdfasdf asfas dfas dfas fas  fdsf asfdsad fadf asdf',
                price: 200.11
            }, {
                vendorCode: '3000.3000.3000',
                nameProduct: 'asda sdfasdf asfas dfas dfas fas  fdsf asfdsad fadf asdf',
                price: 300.11
            }
        ];
    };

    update = async () => {
        const res = await fetch(`${this._apiBase}/update`);
        if (!res.ok) throw new Error(`Could not fetch '/update', received ${res.status}`);
    };

    getBackEndVersion = async () => {
        return await this.getResource(`/version`);
    };
}
