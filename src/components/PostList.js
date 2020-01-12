import React, { Component } from 'react' // Importing react and Component
import { connect } from 'react-redux' // Connect communicates directly with the provider and therefore the global store
import { fetchPosts } from '../actions' // The action creator fetchPosts

// Class component
class PostList extends Component {
  // Life Cycle method runs once when the component first renders
  componentDidMount () {
    this.props.fetchPosts() // Action creator is called here. made avalible via props because of mapStateToProps()
  }
  render () {
    return (
      <div>
        <h1>Post List</h1>
      </div>
    )
  }
}

export default connect(null, { fetchPosts })(PostList)

// Connecting up to the provider with dummy data at the moment
// 1) null is in place of mapStateToProps
// 2) fetchPosts is the action creator
// 3) Post list is the component

/*
connect is going to communicate directly with the provider. They are now 'connected'
In this case it is communicating specifically with the PostList key:value && The fetchPosts action creator
Then connect passes the state and action creator to the PostList component via props

The same thing will happen with the acton creator. it will be made avalible under the props system.
It must be passed into the connect function because connect will give it the dispatch

First argument = mapStateToProps
Second argument = object with the action creator
*/

/*
mapStateToProps()
takes the global state, and converts it into the props system within the component.
returns an object which will be made avalible to the component under the props system
*/
