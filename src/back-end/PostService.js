import Post from './Post.js';
import fileService from './fileService.js';

class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }
  // запрашиваем все поствы с базы данных (например все товары)
  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  //удаляем пост
  async delete(id) {
    if (!id) {
      throw new Error('не указан id');
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
