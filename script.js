// script.js

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();  // Prevent the default form submission
    // Extract form data and process it
    const formData = new FormData(event.target);
    console.log('Form submitted:', Object.fromEntries(formData));
    // Add animation after form submission
    document.getElementById('form-container').classList.add('fade-out');
}

// Adding event listener to the form
document.getElementById('myForm').addEventListener('submit', handleFormSubmission);

// Simple animation effect
function animateElement(elementId, animationClass) {
    const element = document.getElementById(elementId);
    element.classList.add(animationClass);
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, 1000);
}