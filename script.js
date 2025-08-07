// Scroll to section on button click
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle feedback form submission
const form = document.getElementById('feedback-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}, for your feedback!`);
        form.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
