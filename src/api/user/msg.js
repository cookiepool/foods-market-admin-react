import axios from 'axios';

export default {
  getUserMsg() {
    return new Promise((resolve, reject) => {
      axios.get('http://xiaocai.com/user/msg').then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  getUserInfo() {
    return new Promise((resolve, reject) => {
      axios.get('http://xiaocai.com/user/article').then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  }
}