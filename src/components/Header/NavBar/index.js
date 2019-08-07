import React from 'react'; 

export { default } from './NavBar';
const rootUrl = 'https://api.mlab.com/api/1/databases/react_practice/collections';
const API_KEY = 'RoOMkvqHyMyP8TwZeR9JcpRuP-vjPWYb';

export const leftMenuUrl = `${rootUrl}/left_menu?apiKey=${API_KEY}`;
export const rightMenuUrl = `${rootUrl}/right_menu?apiKey=${API_KEY}`;
export const centerMenuUrl = `${rootUrl}/center_menu?apiKey=${API_KEY}`;
export const headerUrl = `${rootUrl}/header?apiKey=${API_KEY}`;
export const axios = require('axios');

export function leftMenu(arr){
	var leftmenu = arr.map(
		(menu) => <li><a href="#"> {menu} </a></li>

	);	

	return leftmenu;
}

export function rightMenu(arr){
	var rightmenu = arr.map(
		(menu) => <li><a href="#"> {menu} </a></li>
	);

	return rightmenu;
}
