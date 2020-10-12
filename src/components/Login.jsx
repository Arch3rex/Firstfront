import React,{useState} from "react";
import {Redirect} from "react-router-dom";
const axios = require('axios');
const qs = require('qs');


function Login(){
	const [user,setUser] = useState("");
	const [pwd,setPwd]= useState("");
	const [isRedirect, setIsRedirect] = useState(false);

	function handleUser(event){
		setUser(event.target.value);

	}
	const redir ="/projects/"+user;
	function handlePwd(event){
		setPwd(event.target.value);
	}
	function handleSubmit(event){
		console.log(user);
		console.log(pwd);
		axios({
  		method: 'post',
  		url: 'http://localhost:4000/login',
  		data: qs.stringify({
    			username:user,
    			password:pwd
  		}),
  		headers: {'content-type': 'application/x-www-form-urlencoded;charset=utf-8'}
		}).then((response)=>{console.log(response);})
			.then(() => {setIsRedirect(true);})
				.catch((err)=>{console.log(err);});

		event.preventDefault();
	}

	

	return isRedirect ? (<Redirect to ={redir}/>):(<div className="container">
		<div className="row centralize justify-content-center text-center align-items-center">
		<div className="col-2"></div>
		<div className="col-8">
		<h1>Login Form</h1>
		<form onSubmit={handleSubmit}>
			<input className="form-control m-2"
				onChange={handleUser} 
				type ="textbox" 
				placeholder ="Input uname" 
				name = "username" 
				value={user}/>
			<input className="form-control m-2"
				onChange ={handlePwd} 
				type = "password" 
				placeholder = "Input password" 
				name ="password" 
				value={pwd}/>
			<input className="btn btn-dark m-1" type ="submit" value ="Login"/>
		</form>
		</div>
		<div className="col-2"></div>
		</div>
	</div>
	)
}
export default Login;





