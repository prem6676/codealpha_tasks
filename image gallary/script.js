// Function to open the modal and display the clicked image
function openModal(imageId) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");

  // Get the image element based on the ID
  var img = document.getElementById(imageId);

  // Set the modal content to the clicked image
  modal.style.display = "flex"; // Use flexbox to center the modal
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
