import React from "react";

function Task(props){
	return(<span>
		<ul>
		<li>{props.content}</li>
		<li>{props.prior}</li>
		<li>{props.deadline}</li>
		<li>{props.isdone}</li>
		<input onClick = {()=>{props.deleteTasks(props._id);}} type="button" value="X task"/>
		</ul>
	</span>);
}
export default Task;