(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuButton && mainNav) {
    menuButton.addEventListener('click', () => {
      const isExpanded =
        menuButton.getAttribute('aria-expanded') === 'true';

      menuButton.setAttribute(
        'aria-expanded',
        String(!isExpanded)
      );

      mainNav.classList.toggle('is-open', !isExpanded);

      menuButton.setAttribute(
        'aria-label',
        isExpanded ? 'فتح القائمة' : 'إغلاق القائمة'
      );
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'فتح القائمة');
        mainNav.classList.remove('is-open');
      });
    });

    document.addEventListener('click', (event) => {
      if (
        !mainNav.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'فتح القائمة');
        mainNav.classList.remove('is-open');
      }
    });
  }

  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();