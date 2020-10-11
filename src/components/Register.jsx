import React, {useState} from "react";
import {Redirect} from "react-router-dom";
const axios = require('axios');
const qs = require('qs');

function Register(){
	const [uname,setUname] = useState("");
	const [password,setPassword] = useState("");
	const [isRedirect,setRedirect]=useState(false);
	const redir ="/projects/"+uname;

	function handleUname(event){
		setUname(event.target.value);
	}
	

	function handlePassword(event){
		setPassword(event.target.value);
	}
	//post user
	function handleSubmit(event){
		axios({
  		method: 'post',
  		url: 'http://localhost:4000/register',
  		data: qs.stringify({
    			username:uname,
    			password:password
  		}),
  		headers: {'content-type': 'application/x-www-form-urlencoded;charset=utf-8'}
		}).then((response)=>{console.log(response);})
			.then(()=>{setRedirect(true);})
			.catch((err)=>{console.log(err);});

		event.preventDefault();
	}
	return isRedirect ? (<Redirect to={redir}/>):(<div>
		<form onSubmit={handleSubmit}>
			<input 
				onChange={handleUname} 
				type ="textbox" 
				placeholder ="input uname" 
				name = "username" 
				value={uname}/>
			<input 
				onChange ={handlePassword} 
				type = "password" 
				placeholder = "input password" 
				name ="password" 
				value={password}/>
			<input 
				type ="submit" 
				value ="Register"/>
		</form>
	</div>
	)
}
export default Register;