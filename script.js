const face = document.getElementById('face');

// Save the original image source
const originalSrc = face.src;

// What to change to on hover
const hoverSrc = 'romu-hover.png';

face.addEventListener('mouseenter', () => {
  face.style.animationPlayState = 'paused';
  face.src = hoverSrc; // Change the image
});

face.addEventListener('mouseleave', () => {
  face.style.animationPlayState = 'running';
  face.src = originalSrc; // Change it back
});

const projectHeaders = document.querySelectorAll('.projectHeader');

projectHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');

    if (content.style.maxHeight) {
      // Collapse
      content.style.maxHeight = null;
      content.style.paddingBottom = '0';
      arrow.textContent = '▶️';
    } else {
      // Expand
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.paddingBottom = '16px';
      arrow.textContent = '🔽';
    }
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from actually submitting
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // You could then use this data to display a success message or send the info to an email server, etc.
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  
    alert('Your message has been sent!');
    
    // 🧹 Clear the form fields
     document.getElementById('contactForm').reset();

  });