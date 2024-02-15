//function for nav menu toggle
function toggleMenu() {
  //When menu clicked, function is called from html...
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');
  
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden'); // Remove "hidden" class to show menu
    mobileMenu.style.right = '0%'; // Slide menu in from right
    menuIcon.classList.add('open'); // Add "open" class to change icon to "X"
  } else {
    mobileMenu.classList.add('hidden');
    mobileMenu.style.right = '-100%';
    menuIcon.classList.remove('open'); // Remove "open" class to revert icon back to "="
  }
}

//function to work buttons in the carousel. experience section first.
const exp_pre_btn = document.getElementById('exp-pre-btn');
const exp_nxt_btn = document.getElementById('exp-nxt-btn');
const experience_container = document.getElementById('experience-container');//experience section

const cardWidth = 270; //wifth of card from CSS... .experience-card accounts for width and paddign

exp_pre_btn.addEventListener('click', () => {
  experience_container.scrollLeft -= cardWidth;
});

exp_nxt_btn.addEventListener('click', () => {
  experience_container.scrollLeft += cardWidth;
});

//Now code for projects section
const proj_pre_btn = document.getElementById('proj-pre-btn');
const proj_nxt_btn = document.getElementById('proj-nxt-btn');
const projects_container = document.getElementById('projects-container');//projects section

//same cardwidth as experience. so use same variable

proj_pre_btn.addEventListener('click', () => {
  projects_container.scrollLeft -= cardWidth;
});

proj_nxt_btn.addEventListener('click', () => {
  projects_container.scrollLeft += cardWidth;
});

console.log('Script loaded!'); //for testing to make sure script is runnign