// // Sample items data (replace this with your data)
// const items = [
//   { name: 'Phone', category: 'electronics', image: 'phone.jpg' },
//   { name: 'Watch', category: 'accessories', image: 'watch.jpg' },
//   // Add more items here
// ];

// // Function to display items based on category
// function filterItems(category) {
//   const itemsSection = document.getElementById('items');
//   itemsSection.innerHTML = '';

//   if (category === 'all') {
//     displayItems(items);
//   } else {
//     const filteredItems = items.filter(item => item.category === category);
//     displayItems(filteredItems);
//   }
// }

// // Function to display items
// function displayItems(itemsToDisplay) {
//   const itemsSection = document.getElementById('items');
//   itemsToDisplay.forEach(item => {
//     const itemElement = document.createElement('div');
//     itemElement.classList.add('item');

//     const imageElement = document.createElement('img');
//     imageElement.src = item.image;
//     imageElement.alt = item.name;

//     itemElement.appendChild(imageElement);
//     itemsSection.appendChild(itemElement);
//   });
// }

// // Initially display all items when the page loads
// window.onload = function() {
//   filterItems('all');
// };

// // script.js

// // Function to set consistent dimensions for images
// function setImagesSize() {
//   const itemImages = document.querySelectorAll('.item img');

//   itemImages.forEach(img => {
//     img.addEventListener('load', () => {
//       // Set a consistent size for all images
//       img.style.width = '200px'; // Adjust as needed
//       img.style.height = '150px'; // Adjust as needed
//       img.style.objectFit = 'cover'; // Maintain aspect ratio while covering
//     });
//   });
// }

// // Run the function after the DOM content is loaded
// document.addEventListener('DOMContentLoaded', setImagesSize);

// script.js

// Function to set consistent dimensions for images
function setImagesSize() {
  const itemImages = document.querySelectorAll('.item img');

  itemImages.forEach(img => {
    img.addEventListener('load', () => {
      // Set a consistent size for all images
      img.style.width = '200px'; // Adjust as needed
      img.style.height = '150px'; // Adjust as needed
      img.style.objectFit = 'cover'; // Maintain aspect ratio while covering
    });
  });
}

// Run the function after the DOM content is loaded
document.addEventListener('DOMContentLoaded', setImagesSize);
