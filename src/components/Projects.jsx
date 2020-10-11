import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import Projform from "./Projform"; 
import axios from "axios";
const qs = require("qs");

function Projects(){
	const [store,setStore] = useState([]);
	const [projname,setProjName] = useState("");
	const [submit,setSubmit] = useState(false);
	const [click,setClick]= useState(false);
	
	
	const params = useParams()
	const path = "http://localhost:4000/projects/"+params.uname;

	//uses store which contains all projects
	//to generate projforms
	function createForm(component){
	return(<Projform 
		name={component.name} 
		key ={component._id} 
		_id={component._id} 
		handleClick={handleClick}/>)
	}

	function handleProjName(event){
		setProjName(event.target.value)
	}
	//post projects
	function handleSubmit(event){
		console.log(projname);
		axios({
  		method: 'post',
  		url: path,
  		data: qs.stringify({
    			name:projname
  		}),
  		headers: {'content-type': 'application/x-www-form-urlencoded;charset=utf-8'}
		}).then((response)=>{setSubmit(true);})
			.catch((err)=>{console.log(err);});

		event.preventDefault();
	}
	//delete projects
	function handleClick(projID){
		console.log(projID);
		axios({
  		method: 'delete',
  		url: path,
  		data: qs.stringify({
  				_id:projID,
    			uname:params.uname
  		}),
  		headers: {'content-type': 'application/x-www-form-urlencoded;charset=utf-8'}
		}).then((response)=>{setClick(true);})
			.catch((err)=>{console.log(err);});

		}
	
useEffect(()=>{
	axios.get(path).then((response)=>{setStore(response.data);})
	.catch((err)=>{console.log(err);})
		setClick(false);
		setSubmit(false);
	

},[click,submit]);

	return(
		<div>
			<h1>Hello {params.uname}</h1>
			<form onSubmit = {handleSubmit}>
				<input 
					onChange ={handleProjName}
					type ="textbox" 
					name ="name" 
					value={projname} 
					placeholder ="enter project name"/>

				<input type ="submit" value="create project"/>
			</form>
			{store.map(createForm)}
		</div>
		)
}
export default Projects;