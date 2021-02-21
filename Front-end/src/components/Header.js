import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";

function Header(props) {
	return (
		<header className="header">
			<img src={Logo} className="logo" alt="Around US Logo" />
			<p className="header__email">{props.email}</p>
			<Link className="header__link" to={props.link} ><span onClick={props.onClick}>{props.text}</span></Link>
		</header>
	);
}
export default Header;
