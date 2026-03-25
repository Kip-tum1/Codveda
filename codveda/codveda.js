 /* ── Mobile nav toggle ── */
    const toggle = document.querySelector('.nav__toggle');
    const navList = document.querySelector('.nav__list');

    toggle.addEventListener('click', () => {
      const open = navList.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });

    /* Close nav on link click (mobile) */
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });

    /* ── Intersection Observer — fade-up sections ── */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    /* ── Stagger clinic cards ── */
    document.querySelectorAll('.clinic-card').forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.12}s`;
    });