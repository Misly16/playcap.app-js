/* eslint-disable require-jsdoc */
const Playcap = require('../src');

const api = new Playcap('token');


async function test() {
  await api.getUser('userId');
  await api.getUserPosts('userId');
  await api.getPost('postId');
}

test();
