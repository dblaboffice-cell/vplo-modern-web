(() => {
  'use strict';

  /*
   * ID 110 will become a direct child of the primary School item (103) so
   * Joomla can generate /szkola/przeslanie-dyrektora.  Item 109 remains the
   * presentational "Szkoła" group used by the React-equivalent dropdown.
   * Moving the already-rendered node keeps its Joomla-generated href intact.
   */
  const preserveSchoolGroup = (menu) => {
    const schoolRoot = menu?.querySelector(':scope > .item-103');
    const schoolGroup = schoolRoot?.querySelector(':scope > .mod-menu__sub > .item-109');
    const directorMessage = schoolRoot?.querySelector(':scope > .mod-menu__sub > .item-110');
    const groupItems = schoolGroup?.querySelector(':scope > .mod-menu__sub');

    if (!directorMessage || !groupItems || directorMessage.parentElement === groupItems) return;

    groupItems.insertBefore(directorMessage, groupItems.firstChild);
  };

  preserveSchoolGroup(document.querySelector('.desktop-nav .vplo-menu'));
  preserveSchoolGroup(document.querySelector('.mobile-menu'));
})();
