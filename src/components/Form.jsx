import React,{useState} from "react";

function Form(props){
	const [content,setContent]= useState("");
	const [prior,setPrior] = useState("");
	const [deadline,setDeadline] = useState("");
	const [isdone,setIsDone] = useState("");
	
	function getContent(event){setContent(event.target.value);}
	function getPrior(event){setPrior(event.target.value);}
	function getDeadline(event){setDeadline(event.target.value);}
	function getIsDone(event){setIsDone(event.target.value);}

	return(<form className="text-center">
		<input className="form-control m-2 " onChange ={getContent}value={content} type="textbox" placeholder="Input content"/>
		<input className="form-control m-2 " onChange ={getPrior} value={prior}type="textbox" placeholder="Input prior"/>
		<input className="form-control m-2 " onChange ={getDeadline} value={deadline}type="textbox" placeholder="Input deadline"/>
		<input className="form-control m-2 " onChange ={getIsDone}value={isdone}type="textbox" placeholder="Input isdone"/>
		<input className="btn btn-dark m-1 " onClick = {()=>{props.makePostTasks(content,prior,deadline,isdone)}} type = "button" value="Create task"/>
	</form>);
}
export default Form;
