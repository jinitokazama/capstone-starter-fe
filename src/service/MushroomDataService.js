import axios from 'axios';

class MushroomDataService {

    constructor(url = process.env.REACT_APP_API_URL, client = axios) {
        this.url = url;
        this.client = client;
    }

    getAllMushrooms() {
        return this.client.get(`${this.url}/api/mushrooms`)
    }
}

export default MushroomDataService;
