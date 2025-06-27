// Expand/Collapse car card descriptions
document.querySelectorAll('.car-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.car-card.expanded').forEach(expanded => {
      if (expanded !== card) expanded.classList.remove('expanded');
    });
    card.classList.toggle('expanded');
  });
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll to Models on "Explore Models" button
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    document.querySelector('#models').scrollIntoView({ behavior: 'smooth' });
  });
}

// Smooth scroll for nav links
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
