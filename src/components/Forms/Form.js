import React, { useState } from 'react';
import { func } from 'prop-types';

function Form(props) {
  const [content, setContent] = useState('');
  const [prior, setPrior] = useState('');
  const [deadline, setDeadline] = useState('');

  function getContent(event) {
    setContent(event.target.value);
  }
  function getPrior(event) {
    setPrior(event.target.value);
  }
  function getDeadline(event) {
    setDeadline(event.target.value);
  }

  return (
    <form className="text-center">
      <input
        className="form-control m-2 "
        onChange={getContent}
        value={content}
        type="textbox"
        placeholder="Input content"
      />
      <input
        className="form-control m-2 "
        onChange={getPrior}
        value={prior}
        type="textbox"
        placeholder="Input prior"
      />
      <input
        className="form-control m-2 "
        onChange={getDeadline}
        value={deadline}
        type="textbox"
        placeholder="Input deadline"
      />
      <input
        className="btn btn-dark m-1 "
        onClick={() => {
          props.makePostTasks(content, prior, deadline);
        }}
        type="button"
        value="Create task"
      />
    </form>
  );
}

Form.propTypes = {
  makePostTasks: func,
};

export default Form;
