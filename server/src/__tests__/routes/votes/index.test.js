/* eslint-disable no-unused-vars */
import request from 'supertest';
import bcrypt from 'bcrypt';
import application from '../../../configs/app';
import Votes from '../../../models/votes';
import Blogs from '../../../models/blogs';

let server;
const applicationInstance = application();
const userVotes = [{
  upVotes: 1,
  userId: 'test',
  blogId: 'test',

}];
const blogs = [{
  _id: '5d5eab5a639c1930109d1b81',

}];
const hashFn = async () => '####HASHED####';
const compareHash = async (data, hashedData) => data === hashedData;
const mockHashing = jest.spyOn(bcrypt, 'hash');
const mockCompareHashing = jest.spyOn(bcrypt, 'compare');

mockHashing.mockImplementation(hashFn);
mockCompareHashing.mockImplementation(compareHash);

describe('/api/v1', () => {
  beforeEach(() => {
    server = applicationInstance.create();
    jest.resetModules();
  });


  describe('VOTES /', () => {
    describe('GET /', () => {
      it('should return 404 for invalid path', async () => {
        const res = await request(server).get('/api/v1/votes/invalid/path/here');
        expect(res.status).toBe(404);
      });
      it('should return 200 for health path', async () => {
        const res = await request(server).get('/api/v1/votes/health');
        expect(res.status).toBe(200);
      });

      describe('/:id', () => {
        it('should return 400 for invalid blog Id. ', async () => {
          const findByBlogId = async () => null;
          const mockFindBlogFunction = jest.spyOn(Blogs, 'findById');
          mockFindBlogFunction.mockImplementation(findByBlogId);
          const res = await request(server).get('/api/v1/votes/randomInvalidBlog');
          expect(res.status).toBe(400);
        });

        it('should return 404 for valid blog Id but blog does not exist ', async () => {
          const findByBlogId = async () => {
            const toObject = () => null;
            return {
              toObject,
            };
          };
          const mockFindBlogFunction = jest.spyOn(Blogs, 'findById');
          mockFindBlogFunction.mockImplementation(findByBlogId);
          const res = await request(server).get('/api/v1/votes/5d5eab5a639c1930109d1b81');
          expect(res.status).toBe(404);
        });
      });
    });
  });
});
