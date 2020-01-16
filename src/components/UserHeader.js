import React, { Component } from 'react' // Import react
import { connect } from 'react-redux' // Allows us to communicate directly with the provider
import { fetchUser } from '../actions' // Action creator to fetch users

class UserHeader extends Component {
  componentDidMount () {
    this.props.fetchUser(this.props.userId)
  }
  render () {
    const { user } = this.props
    // `find` is a built in JS function
    // `user` will be called with every element
    // const user = this.props.users.console.log(user)
    // If there is no user then return null
    // There wont be a user a first time the function runs

    if (!user) {
      return null
    }

    return (
      <div className='header'>
        {user.name}
      </div>
    )
  }
}
// The connect fucntion will allow the UserHeader to communicate directly with the provider ie the global store
// 1st argument = mapStateToProps
// 2nd argument = the {actionCreator} (makes it avalible under the props system)

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader)

/*
mapStateToProps.
UsersHeader needs access to the components global level state. Thats why we use map state to props
Takes the entire state argument. The keys avalible can be seen in the reducers index file.
Now this.props.users is an arry of all the users from the global state
ownProps is an argument which gives the function a reference ot the compontets own props
*/

/*
connect is used to communicate with the provider && global store
1st argument = mapStateToProps
2nd argument = the action creator.

Now the action creator and the data from the store are avalible under props
*/

// TODO doc eveything associated with this component
