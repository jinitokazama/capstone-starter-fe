import axios from 'axios';
import isAuthenticated from '../utils/isAuthenticated';
import {generateAuthHeader} from "../utils/authHelper";

class MushroomDataService {

    constructor(url = process.env.REACT_APP_API_URL, client = axios) {
        this.url = url;
        this.client = client;
        this.auth = {
            headers: generateAuthHeader()
        };
    }

    getAllMushrooms(searchTerm) {
        let query = ""
        if(searchTerm) {
            query = `?searchTerm=${searchTerm}`
        }
        return this.client.get(`${this.url}/api/mushrooms${query}`)
    };

    createMushrooms(data) {
        if(isAuthenticated()) {
            return (
                console.log("Create Mushrooms Called"),
                this.client.post(`${this.url}/api/mushrooms`, this.auth)
                )    
        } else {
            console.log("Access Denied")
        }
    };

    updateMushrooms(mushroomId) {
        if(isAuthenticated()) {
            return (
                console.log("Update Mushrooms Called"),
                this.client.put(`${this.url}/api/mushrooms/${mushroomId}`, this.auth)
                )    
        } else {
            console.log("Access Denied")
        }
    };

    deleteMushrooms(mushroomId) {
        if(isAuthenticated()) {
            return (
                console.log("Delete Mushrooms Called"),
                this.client.delete(`${this.url}/api/mushrooms/${mushroomId}`, this.auth)
            )    
        } else {
            console.log("Access Denied")
        }
    }
}

export default MushroomDataService;
