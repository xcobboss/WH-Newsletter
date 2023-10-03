document.addEventListener('DOMContentLoaded', function () {
    const checkAllBox = document.getElementById('check-all');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkAllBox.addEventListener('change', function (e) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = e.target.checked;
        });
    });

    const submitButton = document.getElementById('submit-button');
    const form = document.getElementById('email-form');
    const homeButtonContainer = document.querySelector('.home-button-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Check if at least one checkbox is checked
        const atLeastOneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

        if (!atLeastOneChecked) {
            alert('Please select at least one wine region or department.'); // You can customize the error message
        } else {
            // Add the submitting class and animate the button
            submitButton.value = 'Submitting...';
            submitButton.classList.add('submitting');

            // Smoothly change the button appearance
            setTimeout(function () {
                // Change the button text and class when submission is complete
                submitButton.value = 'Sign Up Complete';
                submitButton.classList.remove('submitting');
                submitButton.classList.add('done');
                submitButton.disabled = true; // Disable the button

                // Show the "Home" button container
                homeButtonContainer.style.display = 'block';
            }, 2000); // Change this value to match your actual submission time

            // You can also submit the form to your server here
            // Example: form.submit();
        }
    });
});
