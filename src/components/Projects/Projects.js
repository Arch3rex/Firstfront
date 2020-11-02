import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Projform from './Projform';
import axios from 'axios';

function Projects() {
  const params = useParams();
  const path = 'http://localhost:4000/projects/' + params.uname;
  const authToken = localStorage.getItem('auth-token');
  const [store, setStore] = useState([]);
  const [projname, setProjName] = useState('');
  const [submit, setSubmit] = useState(false);
  const [click, setClick] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    axios({
      method: 'get',
      url: path,
      headers: {
        'auth-token': authToken,
        'content-type': 'application/json',
      },
    })
      .then(response => {
        setStore(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [click, submit, path, refreshing, authToken]);

  // uses store which contains all projects
  // to generate projforms
  function createForm(component) {
    return (
      <Projform
        name={component.name}
        key={component._id}
        _id={component._id}
        handleClick={handleClick}
        pathp={path}
        refresh={refresh}
      />
    );
  }

  function handleProjName(event) {
    setProjName(event.target.value);
  }

  // post projects
  function handleSubmit(event) {
    console.log(projname);
    axios({
      method: 'post',
      url: path,
      data: {
        name: projname,
      },
      headers: {
        'auth-token': authToken,
        'content-type': 'application/json',
      },
    })
      .then(response => {
        setSubmit(!submit);
      })
      .catch(err => {
        console.log(err);
      });

    event.preventDefault();
  }
  // delete projects
  function handleClick(projID) {
    console.log(projID);
    axios({
      method: 'delete',
      url: path,
      data: {
        _id: projID,
        uname: params.uname,
      },
      headers: {
        'auth-token': authToken,
        'content-type': 'application/json',
      },
    })
      .then(response => {
        setClick(!click);
      })
      .catch(err => {
        console.log(err);
      });
  }
  function refresh() {
    setRefreshing(!refreshing);
  }

  return (
    <div className="container" style={{ marginTop: '1em' }}>
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-2"></div>
        <div className="col-8">
          <h1 className="text-center">Hello {params.uname}</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control m-2"
              onChange={handleProjName}
              type="textbox"
              name="name"
              value={projname}
              placeholder="Enter project name"
            />

            <input
              className="btn btn-dark m-1"
              type="submit"
              value="create project"
            />
            <br></br>
            <br></br>
            <h1 className="text-center">Your Projects</h1>
          </form>
        </div>
        <div className="col-2"></div>
      </div>
      {store.map(createForm)}
    </div>
  );
}
export default Projects;
