import request from 'supertest';
import application from '../../../configs/app';
import Comments from '../../../models/comments';
import Blogs from '../../../models/blogs';

let server;
const applicationInstance = application();

const blogs = [
  {
    _id: 'test',
    content: '# h1',
    published: true,
    isPrivate: false,
    category: 'testCat'
  }
];

const comments = [
  {
    _id: 'testComment',
    content: 'This is an comment.'
  },
  {
    _id: 'testComment1',
    content: ' This is also an comment'
  },
  {
    _id: 'testComment2',
    content: ' Uff@@'
  }
];
describe('/api/v1', () => {
  beforeEach(() => {
    server = applicationInstance.create();
    jest.resetModules();
  });

  describe('COMMENTS /', () => {
    describe('GET /', () => {
      it('should return 404 for invalid path', async () => {
        const res = await request(server).get(
          '/api/v1/comments/invalid/path/here'
        );
        expect(res.status).toBe(404);
      });

      it('should return 200 for health path', async () => {
        const res = await request(server).get('/api/v1/comments/health');
        expect(res.status).toBe(200);
      });

      it('should return comments for get comments path', async () => {
        const findBlog = async () => {
          const toObject = () => blogs[0];
          return {
            toObject,
            ...blogs[0]
          };
        };
        const findComments = () => {
          const sort = () => {
            const skip = () => {
              const limit = () => comments;
              return {
                limit
              };
            };
            return {
              skip
            };
          };
          return {
            sort
          };
        };
        const findBlogFunctionality = jest.spyOn(Blogs, 'findById');
        const findCommentsFunctionality = jest.spyOn(Comments, 'find');
        findBlogFunctionality.mockImplementation(findBlog);
        findCommentsFunctionality.mockImplementation(findComments);
        const res = await request(server).get(
          '/api/v1/comments/5d5eab5a639c1930109d1b81/1'
        );
        expect(res.status).toBe(200);
      });
    });
  });
});
