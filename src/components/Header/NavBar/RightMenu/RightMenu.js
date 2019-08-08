import React, { Component } from 'react';

export class RightMenu extends Component {
  render() {
    return(
    	<div class="uk-navbar-right">
	    	<ul class="uk-navbar-nav nav-right">
				<li><a href="#">Contact</a></li>
				<li><a href="#">About Us</a></li>
			</ul>
			<ul class="uk-navbar-nav toggle-menu-resp">
				<li>
					<a class="uk-navbar-toggle" href="#" uk-toggle="target: #ufc-nav-resp">
				      <span data-uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Menu</span>
				    </a>
				</li>
			</ul>
		</div>
    );
  }
}

export default RightMenu;
