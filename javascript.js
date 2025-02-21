// Select the CTA button
var ctaButton = document.querySelector(".cta-button");

// Add an event listener to the CTA button
ctaButton.addEventListener("click", function(event) {
    // Prevent the default action (in case the button is wrapped in an anchor <a>)
    event.preventDefault();

    // Redirect the user to the packages page (or section)
    window.location.href = "packages.html"; // Change this to your actual page
});
