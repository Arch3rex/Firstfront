import React, { useState } from 'react';
import { func } from 'prop-types';

function ProjectTitleForm(props) {
   const [content, setContent]= useState('');
   function changeContent(event) {
     setContent(event.target.value);
   }
   return (<div>
      <form className="text-center">
      <input className="form-control m-2"
        onChange = {changeContent}
        type="textbox"
        value={content}
        placeholder="Input new project name"/>
      <input className="btn btn-dark m-1"
        type = "button"
        value="Submit"onClick={()=>{
        props.patchProjectTitle(content);
    }}/>
      </form>
      </div>);
    }
    ProjectTitleForm.propTypes={
      patchProjectTitle: func,
    };

export default ProjectTitleForm;
