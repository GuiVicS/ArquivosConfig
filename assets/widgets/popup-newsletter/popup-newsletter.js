    // script.js
    document.addEventListener('DOMContentLoaded', function() {
        const newsletterPopup = document.getElementById('newsletterPopup');
        const closeButton = document.querySelector('.close-button');
        const newsletterForm = document.getElementById('newsletterForm');
        const couponMessage = document.getElementById('couponMessage');
      
        // Function to show the popup
        function showNewsletterPopup() {
          newsletterPopup.classList.add('show'); // Use class for better control
          sessionStorage.setItem('newsletterShown', 'true'); // Store that the popup has been shown
        }
      
        // Check if the popup has already been shown in this session
        if (sessionStorage.getItem('newsletterShown') !== 'true') {
          // Show the popup after 3 seconds
          setTimeout(showNewsletterPopup, 6000);
        }
      
        // Close the popup
        closeButton.addEventListener('click', function() {
          newsletterPopup.classList.remove('show');
        });
      
        // Close the popup if the user clicks outside the content
        window.addEventListener('click', function(event) {
          if (event.target === newsletterPopup) {
            newsletterPopup.classList.remove('show');
          }
        });
      
        // Handle form submission
        newsletterForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent the form from actually submitting
      
          // Simulate successful submission (replace with actual submission logic)
          // For example: send the email to your server using fetch or XMLHttpRequest
      
          // Show the coupon message and hide the form
          couponMessage.classList.remove('hidden');
          newsletterForm.style.display = 'none';
      
          // Hide the entire popup
          newsletterPopup.classList.remove('show');
        });
      });