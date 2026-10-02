// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Search filter =====
const searchInput = document.getElementById('searchInput');
const placeCards = document.querySelectorAll('.place');
const noResults = document.getElementById('noResults');

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    let visibleCount = 0;

    placeCards.forEach(card => {
      const name = card.dataset.name || '';
      const text = card.textContent.toLowerCase();
      const matches = query === '' || name.includes(query) || text.includes(query);

      card.style.display = matches ? '' : 'none';
      if (matches) visibleCount++;
    });

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  });
}

// ===== Fade-in on scroll =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.05 });

placeCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(card);
});

console.log('🌍 Wanderlust loaded — 10 places ready to explore!');