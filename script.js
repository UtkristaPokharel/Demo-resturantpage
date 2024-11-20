document.addEventListener("DOMContentLoaded", function () {
	loadHomePage(); // Load the home page initially

	// Set up event listeners for "Home" and "Menu" links
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
		loadContactUsPage();
	});
});

function loadHomePage() {
	const contentDiv = document.getElementById('content');
	contentDiv.innerHTML = ''; // Clear any existing content

	// Create the hero section
	const heroDiv = document.createElement('div');
	heroDiv.className = 'hero';

	const heroTextDiv = document.createElement('div');
	heroTextDiv.className = 'hero-text';

	const textDiv = document.createElement('div');
	textDiv.className = 'text';

	const heading = document.createElement('h1');
	heading.textContent = 'Welcome to Glided Plate';
	textDiv.appendChild(heading);

	const paragraph = document.createElement('p');
	paragraph.textContent = 'Best restaurant in town';
	textDiv.appendChild(paragraph);

	const button = document.createElement('button');
	button.id = 'book-now';
	button.textContent = 'Book Now';
	textDiv.appendChild(button);

	heroTextDiv.appendChild(textDiv);
	heroDiv.appendChild(heroTextDiv);

	const bbqImgDiv = document.createElement('div');
	bbqImgDiv.className = 'bbqimg';

	const image = document.createElement('img');
	image.src = 'img/bbq.png';
	image.alt = 'bbq';
	bbqImgDiv.appendChild(image);

	contentDiv.appendChild(heroDiv);
	contentDiv.appendChild(bbqImgDiv);
}

function loadMenuPage() {
	const contentDiv = document.getElementById('content');
	contentDiv.innerHTML = ''; // Clear any existing content

	// Create menu section container
	const menuSection = document.createElement("section");
	menuSection.classList.add("menu-section");

	// Create and append the title (h2) outside the grid container
	const title = document.createElement("h2");
	title.textContent = "Our Menu";
	menuSection.appendChild(title);

	// Create a separate container for the menu items grid
	const menuItemsContainer = document.createElement("div");
	menuItemsContainer.classList.add("menu-items"); // This will be the grid container

	// Sample menu items
	const menuItems = [
		{ name: "Pizza", price: "$12", imgSrc: "img/pizza.png" },
		{ name: "Pasta", price: "$10", imgSrc: "img/pasta.png" },
		{ name: "Salad", price: "$8", imgSrc: "img/salad.png" },
		{ name: "Burger", price: "$9", imgSrc: "img/burger.png" },
		{ name: "Bbqcombo", price: "$15", imgSrc: "img/bbq.png" },
		{ name: "veggies", price: "$15", imgSrc: "img/veggies.png" },
		{ name: "Chicken curry", price: "$15", imgSrc: "img/chickencurry.png" },
		{ name: "Sushi", price: "$15", imgSrc: "img/sushi.png" }
	];

	// Loop through the menu items to create each menu item card
	menuItems.forEach((item) => {
		const itemDiv = document.createElement("div");
		itemDiv.classList.add("menu-item");

		// Image container
		const img = document.createElement("img");
		img.src = item.imgSrc; // Placeholder images
		img.alt = item.name;
		img.classList.add("menu-item-image");

		// Details container
		const detailsDiv = document.createElement("div");
		detailsDiv.classList.add("menu-item-details");

		const itemName = document.createElement("p");
		itemName.textContent = item.name;
		itemName.classList.add("menu-item-name");

		const itemPrice = document.createElement("p");
		itemPrice.textContent = item.price;
		itemPrice.classList.add("menu-item-price");

		// Append name and price to details container
		detailsDiv.appendChild(itemName);
		detailsDiv.appendChild(itemPrice);

		// Append image and details to the itemDiv
		itemDiv.appendChild(img);
		itemDiv.appendChild(detailsDiv);

		// Append each menu item card to the menuItemsContainer
		menuItemsContainer.appendChild(itemDiv);
	});

	// Append the grid container to the menu section
	menuSection.appendChild(menuItemsContainer);

	// Append the complete menu section to the content div
	contentDiv.appendChild(menuSection);
}

function loadContactUsPage() {
	const contentDiv = document.getElementById('content');
	contentDiv.innerHTML = ''; // Clear any existing content

	// create contact section
	const contactSection = document.createElement("section");
	contactSection.classList.add("contact-section");



	// contact description 

	const contactdescription = document.createElement("description");
	contactdescription.classList.add("contact-description");
	const contactHeading = document.createElement('h2');
	contactHeading.textContent = 'Contact info';

	// Add phone information
	const phone = document.createElement('p');
	phone.innerHTML = `📞 <span style="font-weight: normal;">929-242-6868</span>`;

	// Add email information
	const email = document.createElement('p');
	email.innerHTML = `✉️ <span style="font-weight: normal;">contact@info.com</span>`;

	// Add address information
	const address = document.createElement('p');
	address.innerHTML = `📍 <span style="font-weight: normal;">66 Ceres St San Francisco, California(CA), 94124</span>`;

	// Append contact details
	contactdescription.appendChild(contactHeading);
	contactdescription.appendChild(phone);
	contactdescription.appendChild(email);
	contactdescription.appendChild(address);

	// Add separator line
	const separator = document.createElement('hr');

	// Append separator to container
	contactdescription.appendChild(separator);

	// Create "Opening hours" section
	const hoursHeading = document.createElement('h3');
	hoursHeading.textContent = 'Opening hours';
	hoursHeading.style.fontSize = '20px';
	hoursHeading.style.marginBottom = '15px';
	hoursHeading.style.fontWeight = 'bold';

	// Add weekday hours
	const weekdayHours = document.createElement('p');
	weekdayHours.innerHTML = `Monday - Friday — <span style="font-weight: normal;">8:00 - 22:00</span>`;

	// Add weekend hours
	const weekendHours = document.createElement('p');
	weekendHours.innerHTML = `Saturday - Sunday — <span style="font-weight: normal;">10:00 - 23:00</span>`;

	// Append opening hours details
	contactdescription.appendChild(hoursHeading);
	contactdescription.appendChild(weekdayHours);
	contactdescription.appendChild(weekendHours);

	// contactform

	const contactform = document.createElement("form");
	contactform.classList.add("contact-form");
	contactform.setAttribute('id', 'contact-form');


	// Name Container

	const NameLabel = document.createElement('label');
	NameLabel.textContent = 'Name:';
	const NameInput = document.createElement('input');
	NameInput.type = 'text';
	NameInput.name = 'Name';
	NameInput.required = true;


	// Email
	const emailLabel = document.createElement('label');
	emailLabel.textContent = 'Email:';
	const emailInput = document.createElement('input');
	emailInput.type = 'email';
	emailInput.name = 'email';
	emailInput.required = true;

	// Phone Number
	const phoneLabel = document.createElement('label');
	phoneLabel.textContent = 'Phone Number:';
	const phoneInput = document.createElement('input');
	phoneInput.type = 'tel';
	phoneInput.name = 'phone';
	phoneInput.required = true;

	// Message
	const messageLabel = document.createElement('label');
	messageLabel.textContent = 'Message:';
	const messageTextarea = document.createElement('textarea');
	messageTextarea.name = 'message';
	messageTextarea.rows = 5;
	messageTextarea.required = true;

	// Submit Button
	const submitButton = document.createElement('button');
	submitButton.type = 'submit';
	submitButton.textContent = 'Submit';

	// Append elements to the form
	contactform.appendChild(NameLabel);
	contactform.appendChild(NameInput);
	contactform.appendChild(emailLabel);
	contactform.appendChild(emailInput);
	contactform.appendChild(phoneLabel);
	contactform.appendChild(phoneInput);
	contactform.appendChild(messageLabel);
	contactform.appendChild(messageTextarea);
	contactform.appendChild(submitButton);


	// Append form and description to the container
	contactSection.appendChild(contactdescription);
	contactSection.appendChild(contactform);
	contentDiv.appendChild(contactSection);

}
