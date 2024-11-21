export function loadHomePage() {
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