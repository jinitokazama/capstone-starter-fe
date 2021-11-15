import axios from 'axios';

class ToolService {

    constructor(url = process.env.REACT_APP_API_URL, client = axios) {
        this.url = url;
        this.client = client;
    }

    getAllTools() {
      return this.client.get(`${this.url}/api/tools`);
    }
}

export default ToolService;
