import axios from 'axios' // the package we will be making http requests with

/*
This creates an instance of axios
The base url is used instead of the entire end point becasue it makes our code more reuseable
*/

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})
