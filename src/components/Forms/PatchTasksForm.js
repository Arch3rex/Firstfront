import React, { useState } from 'react';
import { string, func, number } from 'prop-types';

function PatchTasksForm(props) {
  const [cont, setCont] = useState(props.content);
  const [prior, setPrior] = useState(props.prior);
  const [deadline, setDeadline] = useState(props.deadline);

  return (
    <div>
      <form className="text-center">
        <input
          onChange={event => {
            setCont(event.target.value);
          }}
          type="textbox"
          value={cont}
        />
        <input
          onChange={event => {
            setPrior(event.target.value);
          }}
          type="textbox"
          value={prior}
        />
        <input
          onChange={event => {
            setDeadline(event.target.value);
          }}
          type="textbox"
          value={deadline}
        />
        <input
          onClick={() => {
            props.patchTasks(cont, prior, deadline);
          }}
          type="button"
          value="Send"
        />
      </form>
    </div>
  );
}
PatchTasksForm.propTypes = {
  patchTasks: func,
  content: string,
  prior: number,
  deadline: string,
};

export default PatchTasksForm;
