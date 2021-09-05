import React, { useEffect, useState, Component } from 'react';
import { connect } from "react-redux";
import { fetchFriends } from '../actions';

class FriendsList extends Component {
    
      componentDidMount() {
          this.props.fetchFriends()
      }

    
    render() {
    return(
        <div>
            <ul>
                {this.props.friends.map(friend => {
                    return (
                        <li key={friend.id}>
                           <p>name: {friend.name}</p>
                           <p>age: {friend.age}</p>
                           <p>email: {friend.email}</p> 
                        </li>
                    )
                })}
            </ul>
        </div>
    )}
}

const mapStateToProps = state => {
    return {
      friends: state.friends,
      isLoading: state.isLoading
    }
  }

export default connect(mapStateToProps, {fetchFriends}) (FriendsList);