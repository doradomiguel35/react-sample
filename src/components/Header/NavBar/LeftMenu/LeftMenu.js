import React, { Component } from 'react';

export class LeftMenu extends Component {
  render() {
    return(
    	<div class="uk-navbar-left">
			<ul class="uk-navbar-nav nav-left">
				<li><a href="#">Home</a></li>
				<li><a href="#">Blogs</a></li>
			</ul>
		</div>
	);
  }
}

export default LeftMenu;
