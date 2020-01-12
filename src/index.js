import React from 'react' // Mandatory import for a react file
import ReactDOM from 'react-dom' // Need this to help render app
import { Provider } from 'react-redux' // The new "parent component of the app"
import { createStore } from 'redux' // Function to create the global state 'store' NB must pass it reducers

import App from './components/App' // The "App"
import reducers from './reducers' // The reducers which will be passed to the createStore function

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
)

// Extra Notes

/*
createStore
The createStore function is imported from redux.
We pass it the reducers and it returns back the redux store
*/

/*
provider
The <Provider> must be passed the store.
The store is created via createStore(reducers)
The new parent component of App. ie it wraps App
App will now have access to the global state
*/
