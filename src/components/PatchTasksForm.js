import React, { useState } from 'react';
import { string, func, number } from 'prop-types';

function PatchTasksForm(props) {
  const [cont, setCont] = useState(props.content);
  const [prior, setPrior] = useState(props.prior);
  const [deadline, setDeadline] = useState(props.deadline);
  const [isdone, setIsDone] = useState(props.isdone);

  return (
    <div>
    <form className="text-center">
      <input onChange={(event) => {
        setCont(
          event.target.value
        );
      }}
        type="textbox"
        value={cont}
      />
      <input onChange={(event) => {
        setPrior(
          event.target.value
        );
      }}
        type="textbox"
        value={prior}
      />
      <input onChange={(event) => {
        setDeadline(
          event.target.value
        );
      }}
        type="textbox"
        value={deadline}
      />
      <input onChange={(event) => {
        setIsDone(
          event.target.value
        );
      }}
        type="textbox"
        value={isdone}
      />
      <input onClick={() =>{
       props.patchTasks(cont, prior, deadline, isdone);
      }}
        type="button"
        value="Send" />
    </form>
       </div>
  );
}
PatchTasksForm.propTypes = {
  patchTasks: func,
  content: string,
  prior: number,
  deadline: string,
  isdone: string,
  };

export default PatchTasksForm;
