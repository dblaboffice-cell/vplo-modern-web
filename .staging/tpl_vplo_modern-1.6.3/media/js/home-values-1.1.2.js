(() => {
  const graphic = document.querySelector('.school-values-graphic');
  if (!graphic) return;

  const buttons = [...graphic.querySelectorAll('.school-value-hotspot')];
  const popups = [...graphic.querySelectorAll('.school-value-popup')];
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  let activatedByTouch = false;

  const closeAll = () => {
    buttons.forEach((button) => button.setAttribute('aria-expanded', 'false'));
    popups.forEach((popup) => { popup.hidden = true; });
  };

  const open = (button, byTouch) => {
    closeAll();
    button.setAttribute('aria-expanded', 'true');
    const popup = graphic.querySelector(`[data-popup="${button.dataset.value}"]`);
    if (popup) popup.hidden = false;
    activatedByTouch = byTouch;
  };

  closeAll();
  buttons.forEach((button) => {
    button.addEventListener('pointerenter', (event) => {
      if (finePointer && event.pointerType === 'mouse' && !activatedByTouch) open(button, false);
    });

    button.addEventListener('pointerleave', (event) => {
      if (finePointer && event.pointerType === 'mouse' && !activatedByTouch) closeAll();
    });

    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeAll();
        activatedByTouch = false;
      } else {
        open(button, !finePointer);
      }
    });
  });
})();
