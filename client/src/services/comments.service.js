import httpService from "./http.service";

class CommentsService {
  constructor() {
    this.httpService = httpService;
  }

  createComment = ({postId, message, parentId}) => {
    console.log(postId)
    return this.httpService.request(`/post/${postId}/comments`, {
      method: 'POST',
      data: {
        message,
        parentId,
      }
    })
  }
}

export default new CommentsService();
