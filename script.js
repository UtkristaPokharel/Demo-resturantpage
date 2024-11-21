import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadContactUsPage } from "./contactus.js";
import { loadAboutUsPage } from "./aboutus.js";

document.addEventListener("DOMContentLoaded", function () {
	loadHomePage(); // Load the home page initially

	// Set up event listeners for links
	document.getElementById("home").addEventListener("click", (event) => {
		event.preventDefault();
		loadHomePage(); // Load the home page content
	});

	document.getElementById("menu").addEventListener("click", (event) => {
		event.preventDefault();
		loadMenuPage(); // Load the menu page content
	});

	document.getElementById("contact-us").addEventListener("click", (event) => {
		event.preventDefault();
		loadContactUsPage(); //Load the contact us page
	});
	document.getElementById("about-us").addEventListener("click", (event) => {
		event.preventDefault();
		loadAboutUsPage(); //Load the about us page
	});
});
