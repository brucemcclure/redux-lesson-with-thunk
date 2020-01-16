/*
Remember to default state to something so it is not undefined
A reducer take 2 arguments, the global state and the action
If the action has a type of `FETCH_POSTS` then return the payload
Must account for the case where the type does not match the payload.
Then return state.
*/

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload] // This is used so we do not mutate state
    default:
      return state
  }
}
