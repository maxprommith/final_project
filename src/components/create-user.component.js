import React, { Component } from 'react';
import axios from 'axios';
import '../css/create-user.css';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
    };
    console.log(newUser);

    axios.post('http://localhost:5000/users/add', newUser)
      .then(res => console.log(res.data));
    
    this.setState({
      username: ''
    })

    window.location = '/create';
  }

  render() {
    return (
      <div className="box">
      <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="input-group"> 
            <label>Username: </label>
            <input  
                type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-footer">
            <input type="submit" value="Create User" className="btn" />
          </div>
        </form>
      </div>
    )
  }
}