(() => {
  const header = document.querySelector('.site-header-subpage');

  if (header) {
    let animationFrameId = null;
    let previousState = null;

    const updateHeaderState = () => {
      if (animationFrameId !== null) return;

      animationFrameId = window.requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 0;

        if (isScrolled !== previousState) {
          previousState = isScrolled;
          header.classList.toggle('is-subpage-scrolled', isScrolled);
        }

        animationFrameId = null;
      });
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  }

  document.querySelectorAll('[data-vplo-header-banner]').forEach((banner) => {
    const slides = [...banner.querySelectorAll('.header-banner-slide')];
    if (slides.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = Math.max(1000, Number.parseInt(banner.dataset.interval || '5000', 10));
    let active = 0;
    window.setInterval(() => {
      const next = (active + 1) % slides.length;
      slides[active].hidden = true;
      slides[active].classList.remove('is-active');
      slides[next].hidden = false;
      // Restart the literal React fade animation for the newly active image.
      slides[next].classList.remove('is-active');
      void slides[next].offsetWidth;
      slides[next].classList.add('is-active');
      active = next;
    }, interval);
  });
})();
