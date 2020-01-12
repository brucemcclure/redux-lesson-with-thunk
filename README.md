# Redux lesson with redux-thunk

## Step 1
#####  1.1 Install dependencies
`npm i redux react-redux axios redux-thunk`
 - [x] redux: The redux library. 
 - [x] react-redux: Integration layer between react and redux.
 - [x] axios: Network/http requests
 - [x] redux-thunk: Middleware to help make requests in a redux app

 Now that our dependencies are installed we can set up the rest of the app. 

#####  1.1 Index.js

```
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

```
Extra notes:

* createStore: The createStore function is imported from redux. We pass it the reducers and it returns back the redux store
* provider: The <Provider> must be passed the store. The store is created via createStore(reducers) The new parent component of App. ie it wraps App. App will now have access to the global state

#####  1.2 App.js

Create a directory in src called `components` 
Create a file called `App.js` inside of `src/components`

```
import React from 'react' // Mandatory import for a react file

function App () {
  return (
    <div className='ui container'>
      <h1>Your app is running</h1>
    </div>
  )
}

export default App

```

Extra notes:

* remember that all classNames are coming from an external stylesheet

#####  1.2 Reducers

Create a directory in src called `reducers` inside the src directory
Creare a file called `index.js` inside `src/reducers/index.js`

```
import { combineReducers } from 'redux' // Function to combine all the reducers which will be later used to make the store


export default combineReducers({
  dummyReducer: () => {
    return 'placeholder'
  }
})
```

Extra notes: 

* combineReducers: Function to combine all the reducers which will be later used to make the store
* The keys of the object inside combineReducers are going to be the keys that show up in the global state object.
* Currently there is dummy data in it to get an error message to not display in the console