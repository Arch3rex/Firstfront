import React from "react";
import {Link} from "react-router-dom";
function Start () {
	return(<div>
		<h1>Register or login</h1>
		<form>
		<Link to='/register'>
		<input type="submit" value ="register"/>
		</Link>
		<Link to ='/login'>
		<input type ="submit" value ="login"/>
		</Link>
		</form>
	</div>)
	
}
export default Start;