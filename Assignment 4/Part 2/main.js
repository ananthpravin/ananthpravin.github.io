const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Array of image objects containing file names and alternative descriptions
const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" },
];

// Base URL for fetching the image assets online
const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// Loop through each image object to dynamically create thumbnail elements
for (const image of images) {
  // Create a new <img> element
  const newImage = document.createElement("img");
  
  // Set the image source path and alt text attributes
  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;
  
  // Append the newly created thumbnail to the thumb-bar container
  thumbBar.appendChild(newImage);

  // Add a click event listener to update the main display image when clicked
  newImage.addEventListener("click", updateDisplayedImage);
}

// Function to update the full-size display image attributes when a thumbnail is selected
function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

// Toggle button click listener to switch between Lighten and Darken modes
btn.addEventListener("click", () => {
  // Check if the button currently has the "dark" class
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)"; // Apply semi-transparent dark overlay
  } else {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";   // Clear overlay
  }
  
  // Toggle the "dark" class on the button for the next click
  btn.classList.toggle("dark");
});