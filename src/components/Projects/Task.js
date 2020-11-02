import React, { useState } from 'react';
import { string, func, number, boolean } from 'prop-types';
import PatchTasksForm from '../Forms/PatchTasksForm';
import axios from 'axios';
import ReactDOM from 'react-dom';

function Task(props) {
  const [patchTasksForm, setPatchTasksForm] = useState(false);
  const authToken = localStorage.getItem('auth-token');
  function patchTasks(cont, prior, deadline) {
    axios({
      method: 'patch',
      url: props.patht,
      data: {
        _id: props._id,
        content: cont,
        prior: prior,
        deadline: deadline,
      },
      headers: {
        'auth-token': authToken,
        'content-type': 'application/json',
      },
    })
      .then(response => {
        props.refreshPatchedTasks();
      })
      .catch(err => {
        console.log(err);
      });
    setPatchTasksForm(false);
  }
  function patchIsDone() {
    axios({
      method: 'patch',
      url: props.patht,
      data: {
        _id: props._id,
        isDone: !props.isDone,
      },
      headers: {
        'auth-token': authToken,
        'content-type': 'application/json',
      },
    })
      .then(response => {
        props.refreshingIsDone();
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <input onChange={patchIsDone} type="checkbox" checked={!!props.isDone} />
      <ul style={{ listStyle: 'none' }}>
        <li>Task| {props.content}</li>
        <li>Priority| {props.prior}</li>
        <li>Deadline| {props.deadline}</li>
        <li style={{ color: props.isDone === true ? 'green' : 'red' }}>
          {props.isDone === true ? 'Done' : 'Not Done'}
        </li>
      </ul>
      <input
        className="btn btn-dark m-1"
        onClick={() => {
          props.deleteTasks(props._id);
        }}
        type="button"
        value="x"
      />
      <input
        className="btn btn-dark m-1"
        onClick={() => {
          setPatchTasksForm(true);
        }}
        type="button"
        value="patch task"
      />
      {patchTasksForm
        ? ReactDOM.createPortal(
            <PatchTasksForm
              patchTasks={patchTasks}
              content={props.content}
              prior={props.prior}
              deadline={props.deadline}
            />,
            document.getElementById('portal')
          )
        : null}
    </div>
  );
}

Task.propTypes = {
  content: string,
  prior: number,
  deadline: string,
  deleteTasks: func,
  refreshPatchedTasks: func,
  _id: string,
  isDone: boolean,
  refreshingIsDone: func,
  patht: string,
};

export default Task;
