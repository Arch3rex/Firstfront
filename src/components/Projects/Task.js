import React, { useState } from 'react';
import { string, func, number } from 'prop-types';
import PatchTasksForm from '../Forms/PatchTasksForm';
import axios from 'axios';
import ReactDOM from 'react-dom';
const qs = require('qs');

function Task(props) {
  const [patchTasksForm, setPatchTasksForm] = useState(false);

  function patchTasks(cont, prior, deadline, isdone) {
    axios({
      method: 'patch',
      url: props.patht,
      data: qs.stringify({
        _id: props._id,
        content: cont,
        prior: prior,
        deadline: deadline,
        isdone: isdone,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
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
  return (
    <div>
      <ul styles={{ listStyle: 'none' }}>
        <li>{props.content}</li>
        <li>{props.prior}</li>
        <li>{props.deadline}</li>
        <li>{props.isdone}</li>
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
              isdone={props.isdone}
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
  isdone: string,
  deleteTasks: func,
  refreshPatchedTasks: func,
  _id: string,
  patht: string,
};

export default Task;
