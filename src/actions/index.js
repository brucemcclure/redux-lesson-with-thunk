import jsonPlaceholder from '../apis/jsonPlaceholder' // import preconfigured axios instance

/*
Named export
fetch posts action creator.
Redux-thunk relaxes the rules of action creators.
Because of these relaxed rules. Action creators can now return functions OR plain objects
This will be very common with API requests because.
All they are, are functions which return functions
*/

// Shorthand
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')
  dispatch({ type: 'FETCH_POSTS', payload: response })
}

// Longhand
// export const fetchPosts = () => {
//   return async (dispatch, getState) => {
//     const response = await jsonPlaceholder.get('/posts')
//     dispatch({ type: 'FETCH_POSTS', payload: response })
//   }
// }
