const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', function () {
  navLinks.classList.toggle('show');
});

// close menu when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('show');
  });
});

// ---------- Auto-update footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Contact form (front-end only demo) ----------
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    status.textContent = 'Please fill in all fields.';
    return;
  }

  // This is a static site, so there's no server to actually send the message.
  // To make this form work for real, connect it to a service like Formspree
  // or EmailJS (both have free plans and simple setup docs).
  status.textContent = 'Thanks, ' + name + '! Your message has been noted.';
  form.reset();
});
