var typed = new Typed("#tt", {
  strings: ["Full-Stack Developer"],
  typeSpeed: 200,
  backSpeed: 200,
  backDelay: 600,
  loop: true
});
// document.addEventListener('DOMContentLoaded', () => {
//   const navLinks = document.querySelectorAll('.nav-link');

//   navLinks.forEach(link => {
//     link.addEventListener('click', (event) => {
//       // Prevent default anchor behavior
//       event.preventDefault();

//       // Remove 'active' class from all links
//       navLinks.forEach(link => link.classList.remove('active'));

//       // Add 'active' class to the clicked link
//       event.currentTarget.classList.add('active');

//       // Scroll to the corresponding section
//       const sectionId = event.currentTarget.getAttribute('href').substring(1);
//       document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
//     });
//   });
// });