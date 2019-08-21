export default class Service {

    _apiBase = 'http://localhost:8080';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return await res.json();
    };

    getLastUpdate = async () => {
        return await this.getResource(`/last`);
    };

    findAllByProductName = async (query) => {
        return await this.getResource(`/list/${query}`);
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
        return await this.getResource(`/update`);
    };

    getBackEndVersion = async () => {
        return await this.getResource(`/version`);
    };
}
