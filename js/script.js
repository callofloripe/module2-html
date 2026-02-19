console.log("script.js loaded");

// Form validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
    } else {
        alert("Thank you! Your message has been received.");
        form.reset();
    }
});

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Show/Hide Skills
const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");

toggleSkills.addEventListener("click", function() {
    skillsSection.classList.toggle("hidden");
});
