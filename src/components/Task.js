import React from 'react';
import { string } from 'prop-types';

function Task(props) {
  return (
    <ul styles={{ listStyle: 'none' }}>
      <li>{props.content}</li>
      <li>{props.prior}</li>
      <li>{props.deadline}</li>
      <li>{props.isdone}</li>
      <input
        className="btn btn-dark m-1"
        onClick={() => {
          props.deleteTasks(props._id);
        }}
        type="button"
        value="x"
      />
    </ul>
  );
}

Task.propTypes = {
  content: string,
  prior: string,
  deadline: string,
  isdone: string,
  deleteTasks: string,
  _id: string,
};

export default Task;
