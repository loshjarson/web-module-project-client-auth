import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchFriends, addFriend } from '../actions';
import './FriendsList.css'

class FriendsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: 0,
            email: '',
        }
    }

    componentDidMount() {
        this.props.fetchFriends()
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFriend(this.state);
        this.props.history.push("/friendsList");
    }

    handleClick = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        this.props.history.push('/')
    }

    
    
    render() {
    return(
        <div className="screen">
            {!this.props.isLoading ? 
            <div className="container">
                <button onClick={this.handleClick} className="logout-button">Logout</button>
                <div className="list-container">
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
                <div className="form-container">
                    <form className="new-friend-form" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange}/>
                        <input type="number" placeholder="age" name="age" value={this.state.age} onChange={this.handleChange}/>
                        <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        <button>Add Friend</button>
                    </form>
                </div> 
            </div>: <h1>Loading...</h1>}
        </div>
    )}
}

const mapStateToProps = state => {
    return {
      friends: state.friends,
      isLoading: state.isLoading
    }
  }

export default connect(mapStateToProps, {fetchFriends, addFriend}) (FriendsList);