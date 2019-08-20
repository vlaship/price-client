export default class Service {

  _apiBase = 'http://localhost:8080/api';

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
    return await this.getResource(`/find/${query}`);
  };

  getUpdate = async () => {
    return await this.getResource(`/update`);
  };

  getBackEndVersion = async () => {
    return await this.getResource(`/version`);
  };


}
