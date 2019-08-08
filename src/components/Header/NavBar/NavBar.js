import React, { Component } from 'react';

import {LeftMenu} from './LeftMenu/LeftMenu.js';
import {RightMenu} from './RightMenu/RightMenu.js';
import {CenterMenu} from './CenterMenu/CenterMenu.js';
import {OffCanvas} from './OffCanvas/OffCanvas.js';

export class NavBar extends Component {
  constructor(props){
		super(props);
	}

  render() {
	return (
		<nav id="kyokushin-navbar" class="uk-navbar-container uk-margin-medium-top uk-margin-medium-left uk-margin-medium-right uk-margin-medium-bottom" data-uk-navbar>
			
			<LeftMenu />
			
			<CenterMenu />
			
			<RightMenu />

			<OffCanvas />
		</nav>
	);
	}
}

export default NavBar;
