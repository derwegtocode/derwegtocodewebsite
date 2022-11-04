const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const cvButton = document.getElementsByClassName('cv')[0];
const cvDiv = document.getElementsByClassName('cv-div')[0];

cvButton.addEventListener('click', () => {
  if (cvDiv.style.display === 'none' ) {
    cvDiv.style.display = 'flex';
  } else {
    cvDiv.style.display = 'none';
  } 
})
