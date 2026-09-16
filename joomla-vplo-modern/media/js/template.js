(() => {
  'use strict';

  const button = document.querySelector('.menu-btn');
  const panel = document.querySelector('.mobile-panel');
  const desktopMenu = document.querySelector('.desktop-nav .mod-menu');
  const mobileInner = document.querySelector('.mobile-panel-inner');
  if (!button || !panel || !mobileInner) return;

  const icons = {
    'Aktualności': '<path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/>',
    'Szkoła': '<path d="m3 10 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5"/>',
    'Uczeń': '<path d="m3 10 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5"/><path d="M21 10v6"/>',
    'Edukacja': '<path d="m3 10 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5"/>',
    'Rekrutacja': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    'Galeria': '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
    'Kontakt': '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/>',
  };

  const makeIcon = (label) => {
    const paths = icons[label];
    return paths ? `<svg class="vplo-nav-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>` : '';
  };

  const decorateMenu = (menu) => {
    if (!menu || menu.dataset.vploDecorated === 'true') return;
    menu.dataset.vploDecorated = 'true';
    menu.classList.add('vplo-menu');
    [...menu.children].forEach((item) => {
      const heading = item.querySelector(':scope > .mod-menu__heading, :scope > .mod-menu__toggle-sub .mod-menu__heading');
      const label = heading?.textContent.trim();
      item.classList.add('vplo-top-item');
      if (item.querySelector(':scope > ul')) item.classList.add('vplo-has-children');
      if (heading && label && !heading.querySelector('.vplo-nav-icon')) heading.insertAdjacentHTML('afterbegin', makeIcon(label));
    });
  };

  const prepareMobileMenu = (menu) => {
    menu.classList.add('mobile-menu');
    menu.removeAttribute('id');
    menu.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
    menu.querySelectorAll('[aria-controls]').forEach((element) => element.removeAttribute('aria-controls'));
    [...menu.children].forEach((item) => {
      const trigger = item.querySelector(':scope > .mod-menu__toggle-sub');
      const submenu = item.querySelector(':scope > ul');
      if (!trigger || !submenu) return;
      trigger.setAttribute('aria-expanded', 'false');
      submenu.setAttribute('aria-hidden', 'true');
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        const opening = !item.classList.contains('is-open');
        [...menu.children].forEach((sibling) => {
          sibling.classList.remove('is-open');
          sibling.querySelector(':scope > .mod-menu__toggle-sub')?.setAttribute('aria-expanded', 'false');
          sibling.querySelector(':scope > ul')?.setAttribute('aria-hidden', 'true');
        });
        item.classList.toggle('is-open', opening);
        trigger.setAttribute('aria-expanded', String(opening));
        submenu.setAttribute('aria-hidden', String(!opening));
      });
    });
  };

  decorateMenu(desktopMenu);
  if (desktopMenu) {
    [...desktopMenu.children].forEach((item) => {
      const trigger = item.querySelector(':scope > .mod-menu__toggle-sub');
      const submenu = item.querySelector(':scope > ul');
      if (!trigger || !submenu) return;
      // Core mod_menu ukrywa również grupy wewnątrz otwartego panelu.
      // React pozostawia je widoczne; zagnieżdżenia niższego poziomu kontroluje CSS.
      trigger.addEventListener('click', () => {
        if (window.innerWidth > 860) submenu.querySelectorAll('ul').forEach((nested) => nested.setAttribute('aria-hidden', 'false'));
      });
    });
  }
  if (desktopMenu) {
    const mobileMenu = desktopMenu.cloneNode(true);
    prepareMobileMenu(mobileMenu);
    mobileInner.replaceChildren(mobileMenu);
  }

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
