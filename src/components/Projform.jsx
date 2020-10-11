import React,{useState,useEffect} from "react";
import axios from "axios";
import Task from "./Task";
import ReactDOM from "react-dom";
import Form from "./Form";
const qs = require("qs");

function Projform(props){
	const [tasks,setTasks] = useState([]);
	const [delTask,setDelTask] = useState(false);
	const [postTasks,setPostTasks] = useState(false);
	const [form,setForm] = useState(false);
	const path = "http://localhost:4000/tasks/"+props._id;

	//uses tasks which contain task related to project
	// to generate Task elements
function createTasks(component){
	return(<Task 
		key = {component._id}
		_id = {component._id}
		content={component.content}
		prior ={component.prior}
		deadline ={component.deadline}
		isdone={component.isdone}
		deleteTasks={deleteTasks}/>);
}
//delete task
function deleteTasks(TID){
	axios({
  		method: 'delete',
  		url: path,
  		data: qs.stringify({
  				_tid:TID,
  		}),
  		headers: {'content-type': 'application/x-www-form-urlencoded;charset=utf-8'}
		}).then((response)=>{setDelTask(true);})
			.catch((err)=>{console.log(err);});
		
			

}
//post task
function makePostTasks(content,prior,deadline,isdone){
	console.log(path);
	axios({
  		method: 'post',
  		url: path,
  		data: qs.stringify({
  				content: content,
  				prior: prior,
  				deadline:deadline,
  				isdone: isdone

  		}),
  		headers: {'content-type': 'application/x-www-form-urlencoded;charset=utf-8'}
		}).then((response)=>{setPostTasks(true);})
			.catch((err)=>{console.log(err);});
			setForm(false);
			
		
}
//on click show task posting form
function showForm(){
	console.log("clicked");
	setForm(true);
}

	useEffect(()=>{
		axios.get(path).then((response)=>{setTasks(response.data);})
		.catch((err)=>{console.log(err);})
			setDelTask(false);
			setPostTasks(false);
			
			

	},[delTask,postTasks]);

	return(<div>
		<h3>{props.name}</h3>
		<span> 
		<input onClick = {()=>{props.handleClick(props._id);}} type="button" value="X"/>
		<input onClick ={showForm} type = "button" value ="+Task"/>	 
		</span>
		{tasks.map(createTasks)}
		{form ? ReactDOM.createPortal(<Form makePostTasks={makePostTasks}/>,document.getElementById("portal")):null}
	</div>)
}
export default Projform;