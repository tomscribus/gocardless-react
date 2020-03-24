		
import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';



const Header = (props) => 
{
	var y =  parseInt(props.activeYear);
	return(

		<>
			<div className="row">
			<div className="col-sm">
			<h3>
				<small><Link className="controlYear_link"  to={`${y-1}`}>&lt; {y-1}</Link></small>
				&nbsp; - {y} - &nbsp;
				<small><Link className="controlYear_link" to={`/${y+1}`}>{y+1} &gt;</Link></small>
			</h3>
			</div>
			<div className="col-sm">
			<div className="dropdown mt-1 ml-2 float-right">
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			<a className="dropdown-item disabled" href="#">All Payments</a>
			<a className="dropdown-item" href="#">Payments succedded</a>
			<a className="dropdown-item" href="#">Payments pending</a>
			<a className="dropdown-item" href="#">Payments error</a>
			</div>
			</div>
			<div className="dropdown mt-1 ml-2 float-right">
			<button className="btn btn-outline-secondary dropdown-toggle btn-sm" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			All Clients
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			<a className="dropdown-item disabled" href="#">All Clients</a>
			<a className="dropdown-item" href="#">Active clients</a>
			<a className="dropdown-item" href="#">Inactive clients</a>
			</div>
			</div>
			</div>
			</div>
		</>

		)
}

export default Header;
