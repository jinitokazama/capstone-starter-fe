import axios from 'axios';
import isAuthenticated from '../utils/isAuthenticated';
import {generateAuthHeader} from "../utils/authHelper";

class MushroomDataService {

    constructor(url = process.env.REACT_APP_API_URL, client = axios) {
        this.url = url;
        this.client = client;
    }

    getAllMushrooms() {
        return this.client.get(`${this.url}/api/mushrooms`)
    };

    createMushrooms() {
        if(isAuthenticated()) {
            const auth = {
                headers: generateAuthHeader()
            };
            return (
                console.log("deleteMushrooms Called"),
                this.client.post(`${this.url}/api/mushrooms`, auth)
                )    
        } else {
            console.log("Access Denied")
        }
    };

    updateMushrooms(mushroomId) {
        if(isAuthenticated()) {
            const auth = {
                headers: generateAuthHeader()
            };
            return (
                console.log("deleteMushrooms Called"),
                this.client.put(`${this.url}/api/mushrooms/${mushroomId}`, auth)
                )    
        } else {
            console.log("Access Denied")
        }
    };

    deleteMushrooms(mushroomId) {
        if(isAuthenticated()) {
            const auth = {
                headers: generateAuthHeader()
            };
            return (
                console.log("deleteMushrooms Called"),
                this.client.delete(`${this.url}/api/mushrooms/${mushroomId}`, auth)
            )    
        } else {
            console.log("Access Denied")
        }
    }
}

export default MushroomDataService;
