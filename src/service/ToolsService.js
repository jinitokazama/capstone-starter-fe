import axios from "axios";
import { generateAuthHeader } from "../utils/authHelper";

class ToolService {
  constructor(url = process.env.REACT_APP_API_URL, client = axios) {
    this.url = url;
    this.client = client;
  }

  getAllTools() {
    return this.client.get(`${this.url}/api/tools`);
  }

  removeTool(toolId) {
    const config = {
      headers: generateAuthHeader(),
    };
    return this.client.delete(`${this.url}/api/tools/${toolId}`, config);
  }

  updateTool(toolId, updatedTool) {
    const config = {
      headers: generateAuthHeader(),
    };
    return this.client.put(`${this.url}/api/tools/${toolId}`, updatedTool, config);
  }

  addTool() {
    return this.client.post(`${this.url}/api/tools`);
  }

}

export default ToolService;
