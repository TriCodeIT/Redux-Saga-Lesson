import React, { Component } from 'react';
import UserList from '../containers/UserList';
import UserForm from '../containers/UserForm';

export default class UserBox extends Component {
  render(){
    return(
      <div className="container">
        <div className="card">
          <div className="card-header bg-info text-center">
            BUMI LANGIT HEROES
          </div>
          <div className="card-body">
            <UserList />
            <UserForm />
          </div>
          <div className="card-footer bg-secondary text-center">
            @TriCodeIT 2020
          </div>
        </div>
      </div>
    )
  }
}
