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

	

	return isRedirect ? (<Redirect to ={redir}/>):(<div>
		<form onSubmit={handleSubmit}>
			<input 
				onChange={handleUser} 
				type ="textbox" 
				placeholder ="input uname" 
				name = "username" 
				value={user}/>
			<input 
				onChange ={handlePwd} 
				type = "password" 
				placeholder = "input password" 
				name ="password" 
				value={pwd}/>
			<input type ="submit" value ="Login"/>
		</form>
	</div>
	)
}
export default Login;





