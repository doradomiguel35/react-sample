import React, { Component } from 'react';

import { leftMenuUrl, rightMenuUrl, centerMenuUrl, axios,
	leftMenu, rightMenu, headerUrl } from './index.js';


export class NavBar extends Component {
  constructor(props){
		super(props);
		this.state = {
			'header': ''
		}
	}

	componentDidMount(){
		axios({
			method: 'get',
			url: headerUrl
		})
		.then(res=>{
			this.setState({
				header: res.data[0]
			})
		});

	}

  render() {
  console.log(this.state.header);
  var left_menu = leftMenu(this.state.header.leftMenu);

	var right_menu = rightMenu(this.state.header.rightMenu);

	var center_menu = this.state.centerMenu;

	return(<a></a>);
	// return (
	// 	<nav id="kyokushin-navbar" class="uk-navbar-container uk-margin-medium-top uk-margin-medium-left uk-margin-medium-right uk-margin-medium-bottom" data-uk-navbar>
	// 		<div class="uk-navbar-left">
	// 			<ul class="uk-navbar-nav nav-left">
	// 				{left_menu}
	// 			</ul>
	// 		</div>

	// 		<div class="uk-navbar-center">
	// 			<ul class="uk-navbar-nav">
	// 				<div class="uk-h1 uk-margin-small-top">
	// 					<a href="#">{center_menu}</a>
	// 				</div>
	// 			</ul>
	// 		</div>
	// 		<div class="uk-navbar-right">
	// 			<ul class="uk-navbar-nav nav-right">
	// 				{right_menu}
	// 			</ul>
	// 			<ul class="uk-navbar-nav toggle-menu-resp">
	// 				<li>
	// 					<a class="uk-navbar-toggle" href="#" uk-toggle="target: #ufc-nav-resp">
	// 			            <span data-uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span>
	// 			        </a>
	// 				</li>
	// 			</ul>
	// 		</div>

	// 		<div id="ufc-nav-resp" uk-offcanvas="overlay: true">
	// 		    <div class="uk-offcanvas-bar">
	// 		    </div>
	// 		</div>
	// 	</nav>
	// );
	}
}

export default NavBar;
