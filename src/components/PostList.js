import React, { Component } from 'react' // Importing react and Component
import { connect } from 'react-redux' // Connect communicates directly with the provider and therefore the global store
import { fetchPosts } from '../actions' // The action creator fetchPosts
import UserHeader from './UserHeader'

// Class component
class PostList extends Component {
  // Life Cycle method runs once when the component first renders
  componentDidMount () {
    this.props.fetchPosts() // Action creator is called here. made avalible via props because of mapStateToProps()
  }

  // renderList is a function to clean up the class render function
  // It maps over the array provided by mapStateToProps and redux
  // Returns a *new* array of the below JSX

  renderList () {
    return this.props.posts.map(post => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>
                {post.title}
              </h2>
              <p>
                {post.body}
              </p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className='ui relaxed divided ist'>
        {this.renderList()}
      </div>
    )
  }
}

// NB This state is the global state
// NB look in `../reducers/index.js` The post reducers is under the posts key.
// Therefore when we call mapStateToProps the posts reducer is found as seen below
// ie state.posts holds all of the data that returned.
// It mapStateToProps will be passed as the first argument in the connect function

const mapStateToProps = state => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)

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
