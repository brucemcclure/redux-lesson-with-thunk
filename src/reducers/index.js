import { combineReducers } from 'redux' // Function to combine all the reducers which will be later used to make the store
import postsReducer from './postsReducer' // Import the post reducer
import usersReducer from './usersReducer'

/*
The keys of the below object are going to be the keys that
show up in the global state object.
Currently there is dummy data in it to get an error message to not display in the console
*/

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
})
