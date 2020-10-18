import React from 'react';
import { Link } from 'react-router-dom';
function Start() {
  return (
    <div className="container" style={{ marginTop: '1em' }}>
      <h1 className="text-center">Register or login</h1>
      <div
        className="row justify-content-center text-center"
        style={{ height: '500px' }}
      >
        <div className="col-2"></div>
        <div className="col-8">
          <form>
            <Link to="/register">
              <input
                className="btn btn-dark m-1"
                style={{ width: '20%' }}
                type="submit"
                value="Register"
              />
            </Link>
            <Link to="/login">
              <input
                className="btn btn-dark m-1"
                style={{ width: '20%' }}
                type="submit"
                value="Login"
              />
            </Link>
          </form>
        </div>
        <div className="col-2 "></div>
      </div>
    </div>
  );
}
export default Start;
