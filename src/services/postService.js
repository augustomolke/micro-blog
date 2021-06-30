let posts = [
  {
    title: "This is my first ReactJS project!",
    body: "In this little project I did not use any DB, in order to make it simple and focused on my current study subject: React (Although it can easily be implemented if needed).A simulation of a real HTTP request was done with setTimeout",
    author: "Otto",
    id: 2,
  },
  {
    title: "What can you do in this Micro-blog?",
    body: "This little app allows you to list every post created, delete a post, read a post and create new posts.",
    author: "Also Otto",
    id: 3,
  },
];

const createPost = (newPost) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let idx = 3;
      res(posts.push({ ...newPost, id: idx + 1 }));
    }, 1000);
  });
};

const deletePost = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res((posts = posts.filter((p) => p.id != id)));
    }, 1000);
  });
};

const getPostById = (param) => {
  return new Promise((res, rej) => {
    let output = posts.filter((p) => {
      return p.id == param;
    })[0];
    setTimeout(() => {
      res(output);
    }, 1000);
  });
};

const getPosts = () => {
  return new Promise((res, err) => {
    setTimeout(() => {
      res(posts);
    }, 1000);
  });
};

export default {
  getPosts,
  createPost,
  deletePost,
  getPostById,
};
