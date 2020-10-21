import React, { useState, useEffect } from 'react';
import { string, func } from 'prop-types';
import axios from 'axios';
import Task from './Task';
import ReactDOM from 'react-dom';
import Form from '../Forms/Form';
import ProjectTitleForm from '../Forms/ProjectTitleForm';
const qs = require('qs');

function Projform(props) {
  const [form, setForm] = useState(false);
  const path = 'http://localhost:4000/tasks/' + props._id;
  const [tasks, setTasks] = useState([]);
  const [delTask, setDelTask] = useState(false);
  const [postTasks, setPostTasks] = useState(false);
  const [titleForm, setTitleForm] = useState(false);
  const [refreshTasks, setRefreshTasks] = useState(false);
  const [refreshIsDone, setRefreshIsDone] = useState(false);

  useEffect(() => {
    axios
      .get(path)
      .then(response => {
        setTasks(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [delTask, postTasks, path, refreshTasks, refreshIsDone]);

  // uses tasks which contain task related to project
  // to generate Task elements
  function createTasks(component) {
    return (
      <Task
        key={component._id}
        _id={component._id}
        content={component.content}
        prior={component.prior}
        deadline={component.deadline}
        deleteTasks={deleteTasks}
        refreshPatchedTasks={refreshPatchedTasks}
        patht={path}
        isdone={component.isdone}
        refreshingIsDone={refreshingIsDone}
      />
    );
  }
  // delete task
  function deleteTasks(TID) {
    axios({
      method: 'delete',
      url: path,
      data: qs.stringify({
        _tid: TID,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
      .then(response => {
        setDelTask(!delTask);
      })
      .catch(err => {
        console.log(err);
      });
  }
  // post task
  function makePostTasks(content, prior, deadline) {
    axios({
      method: 'post',
      url: path,
      data: qs.stringify({
        content: content,
        prior: prior,
        deadline: deadline,
        isdone: false,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
      .then(response => {
        setPostTasks(!postTasks);
      })
      .catch(err => {
        console.log(err);
      });
    setForm(false);
  }
  // on click show task posting form
  function showForm() {
    setForm(true);
  }

  function changeTitleForm() {
    setTitleForm(true);
  }
  function refreshingIsDone() {
    setRefreshIsDone(!refreshIsDone);
  }
  function patchProjectTitle(content) {
    axios({
      method: 'patch',
      url: props.pathp,
      data: qs.stringify({
        _id: props._id,
        name: content,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
      .then(response => {
        props.refresh();
      })
      .catch(err => {
        console.log(err);
      });
    setTitleForm(false);
  }
  function refreshPatchedTasks() {
    setRefreshTasks(!refreshTasks);
  }

  return (
    <div className="container" style={{ marginTop: '1em' }}>
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-2"></div>
        <div className="col-8">
          <h3>{props.name}</h3>
          <input
            className="btn btn-dark"
            type="button"
            value="prname"
            onClick={changeTitleForm}
          />
          <span>
            <input
              className="btn btn-dark m-1"
              style={{ width: '13%' }}
              onClick={() => {
                props.handleClick(props._id);
              }}
              type="button"
              value="X"
            />
            <input
              className="btn btn-dark m-1"
              style={{ width: '13%' }}
              onClick={showForm}
              type="button"
              value="+Task"
            />
          </span>
          {tasks.map(createTasks)}
          {titleForm
            ? ReactDOM.createPortal(
                <ProjectTitleForm patchProjectTitle={patchProjectTitle} />,
                document.getElementById('portal')
              )
            : null}
          {form
            ? ReactDOM.createPortal(
                <Form makePostTasks={makePostTasks} />,
                document.getElementById('portal')
              )
            : null}
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

Projform.propTypes = {
  name: string,
  _id: string,
  handleClick: func,
  pathp: string,
  refresh: func,
};

export default Projform;
