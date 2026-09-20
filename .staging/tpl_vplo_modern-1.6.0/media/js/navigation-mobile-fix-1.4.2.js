(() => {
  'use strict';
  const menu = document.querySelector('.mobile-menu');
  if (!menu) return;

  [...menu.children].forEach((item) => {
    const oldButton = item.querySelector(':scope > .mod-menu__toggle-sub');
    const submenu = item.querySelector(':scope > ul');
    if (!oldButton || !submenu) return;

    // Core mod_menu obsługuje kliknięcia delegowane. Czysta kopia przycisku
    // otrzymuje jeden, lokalny kontroler i zatrzymuje zdarzenie przed core.
    const button = oldButton.cloneNode(true);
    oldButton.replaceWith(button);
    button.setAttribute('aria-expanded', String(item.classList.contains('is-open')));
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const opening = !item.classList.contains('is-open');
      [...menu.children].forEach((sibling) => {
        sibling.classList.remove('is-open');
        sibling.querySelector(':scope > .mod-menu__toggle-sub')?.setAttribute('aria-expanded', 'false');
        sibling.querySelector(':scope > ul')?.setAttribute('aria-hidden', 'true');
      });
      item.classList.toggle('is-open', opening);
      button.setAttribute('aria-expanded', String(opening));
      submenu.setAttribute('aria-hidden', String(!opening));
    });
  });
})();
