import React from "react";

function Task(props){
	return(
		
		<ul className="line">
		<li>{props.content}</li>
		<li>{props.prior}</li>
		<li>{props.deadline}</li>
		<li>{props.isdone}</li>
		<input className="btn btn-dark m-1" onClick = {()=>{props.deleteTasks(props._id);}} type="button" value="x"/>
		</ul>
);
}
export default Task;