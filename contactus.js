export function loadContactUsPage() {
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
