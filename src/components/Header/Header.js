import React, { Component } from 'react';
import NavBar from './NavBar/NavBar.js'

export class Header extends Component {
render() {
  	return (
  		<div class="uk-container header-hero-container">
	  		<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
					<NavBar />
				</div>
			</div>
  	);
	}
}

export default Header;