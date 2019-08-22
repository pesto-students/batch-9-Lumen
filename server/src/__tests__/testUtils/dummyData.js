
import Blogs from '../../models/blogs';
import User from '../../models/user';
import Categories from '../../models/categories';

async function createBlogs() {
  await Blogs.syncIndexes();
  const blog1 = await Blogs.create({
    title: 'How The Title is written',
    userId: '5d5adea00f61796594c32dec',
    content: "It's very easy to make some javascript words **bold** and the other words *italic* with Markdown. You can even [link to Google!](http://google.com)",
    category: '5d5af1a31c9d4400002629d0',
    private: false,
    published: true,
  });

  const blog2 = await Blogs.create({
    title: 'How 10 simple Linux tips which save 50% of my time in the command line',
    userId: '5d5ba0b0d14453a47b1a379a',
    content: `In this article, or tutorial, or javascript whatever you call it, I have shared some UNIX command 
        practices I follow to work fast, quick, productive, or efficiently in Linux.`,
    category: '5d5ba0a64f07c85c9f0bd51e',
    private: true,
    published: true,
  });

  const blog3 = await Blogs.create({
    title: 'NodeJS: How To Run Scripts From The Terminal & Use Arguments in javascript',
    userId: '5d5ba0b0d14453a47b1a379a',
    content: `args[0] is the path to the executable file,
    args[1] is the path to the executed file,
    args[2] is the additional commandline argument from step 2.
    
    So if we want to use our additional commandline argument,
    we can use it like this in a JavaScript file`,
    category: '5d5ba0a64f07c85c9f0bd51e',
    private: false,
    published: true,
  });

  const blog4 = await Blogs.create({
    title: 'The 2 ways to learn how to code',
    userId: '5d5ba0b0d14453a47b1a379a',
    content: `When I started programming two years ago, I was 13, I still wanted to code without reading documentation or without to know basics.
    That's how I started to learn HTML and javascript, then I learned PHP, in the beginning, I learned the Copy/Paste Oriented Programming. 
    But over time I learned a lot of things through practice. I started to stop copy paste and to test the libs I was using 
    by testing all methods/functions/class which was in those libraries. And that's how I discovered the practical way to learn to code.`,
    category: '5d5ba0a64f07c85c9f0bd51e',
    private: true,
    published: true,
  });

  return {
    blog1, blog2, blog3, blog4,
  };
}

async function createUsers() {
  const user1 = await User.create({
    name: 'John Smith',
    email: 'john@gmail.com',
    password: '$2b$10$y.Rbamz1o/m5kCk3x6PaIu1ibPVIK7DKi/oxvp9MS8jQUhaQbKiyq',
    username: 'john',
  });

  const user2 = await User.create({
    name: 'Kent C. Dodds',
    email: 'kent@gmail.com',
    password: '$2b$10$y.Rbamz1o/m5kCk3x6PaIu1ibPVIK7DKi/oxvp9MS8jQUhaQbKiyq',
    username: 'john2',
  });

  return { user1, user2 };
}

async function createCategories() {
  const category1 = await Categories.create({
    name: 'Art',
  });

  const category2 = await Categories.create({
    name: 'Books',
  });

  const category3 = await Categories.create({
    name: 'Food',
  });

  const category4 = await Categories.create({
    name: 'Business',
  });

  const category5 = await Categories.create({
    name: 'Movies',
  });

  const category6 = await Categories.create({
    name: 'Fitness',
  });

  const category7 = await Categories.create({
    name: 'Travel',
  });

  const category8 = await Categories.create({
    name: 'Politics',
  });

  const category9 = await Categories.create({
    name: 'News',
  });

  const category10 = await Categories.create({
    name: 'Entertainment',
  });

  return [
    category1,
    category2,
    category3,
    category4,
    category5,
    category6,
    category7,
    category8,
    category9,
    category10,
  ];
}

export default {
  createUsers,
  createBlogs,
  createCategories,
};
