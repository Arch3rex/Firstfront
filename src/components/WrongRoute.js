import React, { useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function WrongRoute() {
  const [err, setErr] = useState(false);
  const params = useParams();
  axios
    .get(`http:localhost:4000/${params}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
      setErr(true);
    });
  return err ? (
    <div className="container">
      <div
        className="row justify-content-center align-items-center text-center"
        style={{ height: '500px' }}
      >
        <div className="col-2"></div>
        <div className="col-8">
          <h1 style={{ marginBottom: '2px' }}>404</h1>
          <h2>Page Not Found</h2>
          <Link to="/">
            <input
              className="btn btn-dark m-1"
              type="button"
              value="return to start"
            />
          </Link>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  ) : null;
}
export default WrongRoute;
