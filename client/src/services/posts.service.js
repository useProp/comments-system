import httpService from "./http.service";

class PostsService {
  constructor() {
    this.httpService = httpService;
    this.baseUrl = '/posts';
  }

  getPosts = () => {
    return this.httpService.request(this.baseUrl);
  }

  getPost = (id) => {
    return this.httpService.request(`${this.baseUrl}/${id}`);
  }
}

export default new PostsService();
