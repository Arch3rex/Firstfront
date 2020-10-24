import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
const axios = require('axios');

function Register() {
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');
  const [isRedirect, setRedirect] = useState(false);
  const redir = '/projects/' + uname;

  function handleUname(event) {
    setUname(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }
  // post user
  function handleSubmit(event) {
    axios({
      method: 'post',
      url: 'http://localhost:4000/register',
      data: {
        username: uname,
        password: password,
      },
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => {
        console.log(response);
      })
      .then(() => {
        setRedirect(true);
      })
      .catch(err => {
        console.log(err);
      });

    event.preventDefault();
  }
  return isRedirect ? (
    <Redirect to={redir} />
  ) : (
    <div className="container">
      <div
        className="row justify-content-center align-items-center text-center"
        style={{ height: '500px' }}
      >
        <div className="col-2"></div>
        <div className="col-8">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center">Registration Form</h1>
            <input
              className="form-control m-2"
              onChange={handleUname}
              type="textbox"
              placeholder="Input uname"
              name="username"
              value={uname}
            />
            <input
              className="form-control m-2"
              onChange={handlePassword}
              type="password"
              placeholder="Input password"
              name="password"
              value={password}
            />
            <input
              className="btn btn-dark m-1 "
              type="submit"
              value="Register"
            />
          </form>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
export default Register;
