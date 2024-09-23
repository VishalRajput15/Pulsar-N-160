// Add any interactive functionality in the future if needed.
console.log("Header loaded successfully");
console.log("Hero section loaded successfully");


document.getElementById('test-ride-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Display the success message on form submission
    const successMessage = document.getElementById('success-message');
    successMessage.classList.remove('hidden');

    // Clear the form inputs after successful submission
    document.getElementById('test-ride-form').reset();
});





 // Function to toggle the FAQ answer
 function toggleAnswer(questionElement) {
    const answerElement = questionElement.nextElementSibling;
    answerElement.classList.toggle('hidden');
    const arrow = questionElement.querySelector('.arrow');
    arrow.textContent = answerElement.classList.contains('hidden') ? '➡️' : '⬇️';
}

// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});






