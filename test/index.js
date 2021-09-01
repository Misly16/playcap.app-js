/* eslint-disable require-jsdoc */
const Playcap = require('../src');

const api = new Playcap('token');


async function test() {
  await api.getUser('userId');
}

test();
