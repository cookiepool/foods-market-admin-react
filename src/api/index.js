import axios from 'axios';
import "../mock/mock.js";

import msg from './user/msg.js';

export default {
  test() {
    return new Promise((resolve, reject) => {
      axios.get('http://test.com/test').then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    })
  },
  msg,
}