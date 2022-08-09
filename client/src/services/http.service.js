import axios from "axios";

class HttpService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  request = (url, options) => {
    return this.api(url, options)
      .then(res => res.data)
      .catch(err => {
        return Promise.reject(err?.response?.data?.message || 'Request error')
      });
  }
}

export default new HttpService();
