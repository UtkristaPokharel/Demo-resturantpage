export function loadAboutUsPage() {
	const contentDiv = document.getElementById('content');
	contentDiv.innerHTML = ''; // Clear any existing content
	
	// Create a container for the "About Us" content
	const aboutContainer = document.createElement("div");
	aboutContainer.className = 'aboutContainer';
	
	// Add a heading
	const heading = document.createElement("h1");
	heading.className='aboutus-heading';
	heading.textContent = "About Us";

	aboutContainer.appendChild(heading);
	
	// Add an introductory paragraph
	const Paragraph = document.createElement("p");
	Paragraph.className='aboutus-paragraph';
	Paragraph.textContent = "Welcome to our restaurant! We're a family-owned business that has been serving delicious, fresh meals with love and dedication. Our chefs use only the finest ingredients to bring you the authentic taste of home-cooked food.";

	aboutContainer.appendChild(Paragraph);
   
	
	const missionParagraph = document.createElement("p");
	missionParagraph.className='mission-paragraph';
	missionParagraph.textContent = "Our mission is to bring a delightful dining experience for each and every one of our guests. We strive to make you feel at home while delivering exceptional flavors and a warm, inviting atmosphere.";
	
	aboutContainer.appendChild(missionParagraph);
	
	const closingMessage = document.createElement("p");
	closingMessage.className='closing-message';
	closingMessage.textContent = "Thank you for dining with us, and we look forward to serving you again soon!";

	aboutContainer.appendChild(closingMessage);
	
	// Append the about container to the content div
	content.appendChild(aboutContainer);
   }
   
   // Load the About Us page
   loadAboutUsPage();
   