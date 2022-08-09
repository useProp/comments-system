import httpService from "./http.service";

class PostsService {
  constructor() {
    this.httpService = httpService;
    this.baseUrl = '/posts';
  }

  getPosts = () => {
    return this.httpService.request(this.baseUrl);
  }
}

export default new PostsService();
