import axios from 'axios';

// const KEY='AIzaSyBqr8Wmz7vAzqrVsnao3Mm5rAzkfHMsM6A'; //const varibales in uppercase to know that its a const

export default axios.create({
  baseURL : 'https://www.googleapis.com/youtube/v3',//no ending /
  params:{
    // maxResults: 5,
    // part:'snippet',
    //   key : KEY
  }
});