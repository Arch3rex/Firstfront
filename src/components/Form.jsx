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

	return(<form>
		<input onChange ={getContent}value={content} type="textbox" placeholder="input content"/>
		<input onChange ={getPrior} value={prior}type="textbox" placeholder="input prior"/>
		<input onChange ={getDeadline} value={deadline}type="textbox" placeholder="input deadline"/>
		<input onChange ={getIsDone}value={isdone}type="textbox" placeholder="input isdone"/>
		<input onClick = {()=>{props.makePostTasks(content,prior,deadline,isdone)}} type = "button"/>
	</form>);
}
export default Form;
