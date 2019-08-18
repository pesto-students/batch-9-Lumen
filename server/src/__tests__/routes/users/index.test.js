import request from 'supertest';
import bcrypt from 'bcrypt';
import application from '../../../configs/app';
import Users from '../../../models/user';

let server;
const applicationInstance = application();
const users = [{
  email: 'bhalu@yopmail.com',
  username: 'test',
  password: '1233',

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


  describe('USER /', () => {
    describe('GET /', () => {
      it('should return 404 for invalid path', async () => {
        const res = await request(server).get('/api/v1/users/invalid/path/here');
        expect(res.status).toBe(404);
      });
      it('should return 200 for health path', async () => {
        const res = await request(server).get('/api/v1/users/health');
        expect(res.status).toBe(200);
      });
    });

    describe('POST /', () => {
      describe('/sign-in', () => {
        it('should return 400 for invalid signin properties', async () => {
          const countDocs = async () => 0;
          const mockUserFindFunctions = jest.spyOn(Users, 'countDocuments');
          mockUserFindFunctions.mockImplementation(countDocs);
          const emptyUserData = {};
          const noPasswordUser = { email: 'test@yopmail.com' };
          const res1 = await request(server).post('/api/v1/users/signin').set('Accept', 'application/json').send(emptyUserData);
          const res2 = await request(server).post('/api/v1/users/signin').set('Accept', 'application/json').send(noPasswordUser);
          expect(res1.status).toBe(400);
          expect(res2.status).toBe(400);
        });
        it('should return 401 for invalid signin password', async () => {
          const countDocs = async () => 1;
          const findOne = async () => {
            const toObject = () => users[0];
            return {
              toObject,
              ...users[0],
            };
          };
          const mockUserCountFunctions = jest.spyOn(Users, 'countDocuments');
          const mockUserFindFunctions = jest.spyOn(Users, 'findOne');
          mockUserCountFunctions.mockImplementation(countDocs);
          mockUserFindFunctions.mockImplementation(findOne);
          const inValidPassword = { email: 'bhalu@yopmail.com', password: '1242314512' };
          const res1 = await request(server).post('/api/v1/users/signin').set('Accept', 'application/json').send(inValidPassword);
          expect(res1.status).toBe(401);
        });
        it('should return 200 for valid signin password', async () => {
          const countDocs = async () => 1;
          const findOne = async () => {
            const toObject = () => users[0];
            return {
              toObject,
              ...users[0],
            };
          };
          const mockUserCountFunctions = jest.spyOn(Users, 'countDocuments');
          const mockUserFindFunctions = jest.spyOn(Users, 'findOne');
          mockUserCountFunctions.mockImplementation(countDocs);
          mockUserFindFunctions.mockImplementation(findOne);
          const validPassword = { email: 'bhalu@yopmail.com', password: '1233' };
          const res1 = await request(server).post('/api/v1/users/signin').set('Accept', 'application/json').send(validPassword);
          expect(res1.status).toBe(200);
        });
      });
      describe('/sign-up', () => {
        it('should return 400 for invalid signup properties', async () => {
          const countDocs = async () => 0;
          const mockUserFindFunctions = jest.spyOn(Users, 'countDocuments');
          mockUserFindFunctions.mockImplementation(countDocs);
          const emptyUserData = {};
          const noPasswordUser = { email: 'test@yopmail.com' };
          const res1 = await request(server).post('/api/v1/users/signup').set('Accept', 'application/json').send(emptyUserData);
          const res2 = await request(server).post('/api/v1/users/signup').set('Accept', 'application/json').send(noPasswordUser);
          expect(res1.status).toBe(400);
          expect(res2.status).toBe(400);
        });
        it('should return 401 for already existing user', async () => {
          const countDocs = async () => 1;
          const findOne = async () => {
            const toObject = () => users[0];
            return {
              toObject,
              ...users[0],
            };
          };
          const mockUserCountFunctions = jest.spyOn(Users, 'countDocuments');
          const mockUserFindFunctions = jest.spyOn(Users, 'findOne');
          mockUserCountFunctions.mockImplementation(countDocs);
          mockUserFindFunctions.mockImplementation(findOne);
          const existingUser = {
            email: 'bhalu@yopmail.com', password: '1242314512', name: 'Bhalu', username: 'test',
          };
          const res1 = await request(server).post('/api/v1/users/signup').set('Accept', 'application/json').send(existingUser);
          expect(res1.status).toBe(401);
        });
        it('should return 200 for valid signup password', async () => {
          const countDocs = async () => 0;
          const findOne = async () => {
            const toObject = () => users[0];
            return {
              toObject,
              ...users[0],
            };
          };
          const save = async () => {
            const toObject = () => users[0];
            return {
              toObject,
              ...users[0],
            };
          };

          const mockUserCountFunctions = jest.spyOn(Users, 'countDocuments');
          const mockUserFindFunctions = jest.spyOn(Users, 'findOne');
          const mockSaveFunction = jest.spyOn(Users, 'create');
          mockUserCountFunctions.mockImplementation(countDocs);
          mockUserFindFunctions.mockImplementation(findOne);
          mockSaveFunction.mockImplementation(save);
          const notExistingUser = {
            email: 'bhalu@yopmail.com', password: '1242314512', name: 'Bhalu', username: 'test',
          };
          const res1 = await request(server).post('/api/v1/users/signup').set('Accept', 'application/json').send(notExistingUser);
          expect(res1.status).toBe(200);
        });
      });
    });
  });
});
