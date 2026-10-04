(() => {
  document.querySelectorAll('.home-section-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.home-section-card');
      if (!card) return;
      const open = !card.classList.contains('is-open');
      document.querySelectorAll('.home-section-card.is-open').forEach((item) => {
        item.classList.remove('is-open');
        item.querySelector('.home-section-toggle')?.setAttribute('aria-expanded', 'false');
      });
      if (open) {
        card.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
