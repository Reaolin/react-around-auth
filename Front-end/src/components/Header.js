import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";

function Header(props) {
	return (
		<header className="header">
			<img src={Logo} className="logo" alt="Around US Logo" />
			<p className="">{props.email}</p>
			<Link className="" to={props.link} ><span onClick={props.onClick}>{props.text}</span></Link>
		</header>
	);
}
export default Header;
