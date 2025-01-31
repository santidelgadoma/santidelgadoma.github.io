// Get the elements
const popupModal = document.getElementById('popupModal');
const closePopupBtn = document.getElementById('closePopupBtn');
const closeBtn = document.querySelector('.close-btn');

// Show the popup immediately when the page loads
window.addEventListener('load', function() {
    popupModal.style.display = 'flex';
});

// Close the popup when the close button is clicked
closePopupBtn.addEventListener('click', function() {
    popupModal.style.display = 'none';
});

// Close the popup when the 'x' is clicked
closeBtn.addEventListener('click', function() {
    popupModal.style.display = 'none';
});

// Close the popup if the user clicks outside of the modal
window.addEventListener('click', function(event) {
    if (event.target === popupModal) {
        popupModal.style.display = 'none';
    }
});
