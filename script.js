// Scroll to section on nav link click
document.querySelectorAll('nav a').forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();

		const sectionId = link.getAttribute('href').substring(1);
		const section = document.getElementById(sectionId);

		section.scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Form validation
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', e => {
	e.preventDefault();

	const nameValue = nameInput.value.trim();
	const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

	if (nameValue === '') {
		setErrorFor(nameInput, 'Name cannot be blank');
	} else {
		setSuccessFor(nameInput);
	}

	if (emailValue === '') {
		setErrorFor(emailInput, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(emailInput, 'Email is not valid');
	} else {
		setSuccessFor(emailInput);
	}

	if (messageValue === '') {
		setErrorFor(messageInput, 'Message cannot be blank');
	} else {
		setSuccessFor(messageInput);
	}

	if (nameValue !== '' && emailValue !== '' && isEmail(emailValue) && messageValue !== '') {
		form.submit();
	}
});

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const errorMessage = formControl.querySelector('.error-message');
	input.classList.add('error');
	errorMessage.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	input.classList.remove('error');
}

function isEmail(email) {
	return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
