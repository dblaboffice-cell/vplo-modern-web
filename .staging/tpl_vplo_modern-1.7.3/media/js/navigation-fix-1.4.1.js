(() => {
  'use strict';
  const previousButton = document.querySelector('.menu-btn');
  const panel = document.querySelector('.mobile-panel');
  if (!previousButton || !panel) return;

  // Usunięcie wcześniejszych listenerów pakietu 1.2 bez zmiany struktury nagłówka.
  const button = previousButton.cloneNode(true);
  previousButton.replaceWith(button);
  const setOpen = (open) => {
    panel.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    button.classList.toggle('is-open', open);
  };
  button.addEventListener('click', () => setOpen(panel.hidden));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setOpen(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 860) setOpen(false); });
})();
