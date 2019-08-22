import { getBlogsForQuery } from '../../services/blogs/service';
import InMemoryDatabase from '../testUtils/inMemoryDatabase';
import dummyData from '../testUtils/dummyData';


beforeAll(async () => {
  await InMemoryDatabase.createConnection();
});

afterAll(async () => {
  await InMemoryDatabase.closeConnection();
});

afterEach(async () => {
  await InMemoryDatabase.cleanup();
});

describe('Blogs Service', () => {
  it('return expected result for search', async () => {
    const { blog3 } = await dummyData.createBlogs();
    const blogs = await getBlogsForQuery(1, [], 'additional commandline argument');
    const blogInSearch = blogs.find((blog) => blog.title === blog3.title);
    expect(blogInSearch.title).toEqual(blog3.title);
  });

  it('return expected result for no  search string', async () => {
    await dummyData.createBlogs();
    const blogs = await getBlogsForQuery(1, [], '');
    expect(blogs.length > 0).toBe(true);
  });

  it('return expected result for no  search string', async () => {
    await dummyData.createBlogs();
    const blogs = await getBlogsForQuery(1, []);
    expect(blogs.length > 0).toBe(true);
  });
});
