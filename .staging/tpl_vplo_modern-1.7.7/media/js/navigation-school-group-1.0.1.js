(() => {
  'use strict';

  /* The real routes are direct children of 103. Keep 109 as their visual group.
   * Move the existing nodes, preserving Joomla-generated links and IDs. */
  const preserveSchoolGroup = (menu) => {
    const schoolRoot = menu?.querySelector(':scope > .item-103');
    const schoolGroup = schoolRoot?.querySelector(':scope > .mod-menu__sub > .item-109');
    const groupItems = schoolGroup?.querySelector(':scope > .mod-menu__sub');

    if (!schoolRoot || !groupItems) return;

    let previous = null;

    for (const id of [110, 111]) {
      const item = schoolRoot.querySelector(`:scope > .mod-menu__sub > .item-${id}`)
        ?? groupItems.querySelector(`:scope > .item-${id}`);

      if (!item) continue;

      if (previous) {
        previous.after(item);
      } else {
        groupItems.prepend(item);
      }

      previous = item;
    }
  };

  preserveSchoolGroup(document.querySelector('.desktop-nav .vplo-menu'));
  preserveSchoolGroup(document.querySelector('.mobile-menu'));
})();
