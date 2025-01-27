const homeLink = document.querySelector('#home-link');
const homeSection = document.querySelector('#home');
const profileImage = document.querySelector('.profile-image');
const leftSideText = document.querySelector('.left-side');

// Function to trigger animation
function triggerAnimations() {
  profileImage.classList.add('profile-animation');
  leftSideText.classList.add('home-animation');
}

// Trigger animations when the page loads
window.onload = function() {
  triggerAnimations(); // Animate when the page is loaded
};

// Add click event listener to the "Home" link
homeLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior

  // Remove any existing animation classes in case the user clicks again
  profileImage.classList.remove('profile-animation');
  leftSideText.classList.remove('home-animation');

  // Force reflow to restart the animation (trick the browser into re-triggering the animation)
  void homeSection.offsetWidth;

  // Add animation classes to trigger animations
  profileImage.classList.add('profile-animation');
  leftSideText.classList.add('home-animation');

  // Scroll smoothly to the home section
  homeSection.scrollIntoView({ behavior: 'smooth' });
});
