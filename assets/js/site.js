(() => {
  const menu = document.querySelector('.site-menu');
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  document.addEventListener('click', event => {
    if (menu?.open && !menu.contains(event.target)) menu.open = false;
  });
  const topLink = document.querySelector('.back-top');
  const progress = document.querySelector('.reading-progress');
  let scheduled = false;
  function updateScroll() {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = `scaleX(${distance > 0 ? window.scrollY / distance : 0})`;
    topLink?.classList.toggle('visible', window.scrollY > 400);
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateScroll); }
  }, { passive: true });
  window.addEventListener('resize', updateScroll);
  updateScroll();
  const search = document.querySelector('#source-search');
  const cards = [...document.querySelectorAll('.source-card')];
  const count = document.querySelector('#source-count');
  function filterSources() {
    const query = search.value.trim().toLocaleLowerCase('en-AU');
    const terms = query.split(/\s+/).filter(Boolean);
    let visible = 0;
    cards.forEach(card => {
      card.hidden = !terms.every(term => card.dataset.search.includes(term));
      if (!card.hidden) visible++;
    });
    if (count) count.textContent = `${visible} of ${cards.length} sources`;
    document.querySelectorAll('.source-group').forEach(group => {
      group.hidden = ![...group.querySelectorAll('.source-card')].some(card => !card.hidden);
    });
  }
  if (search) {
    search.addEventListener('input', filterSources);
    window.addEventListener('hashchange', () => {
      if (location.hash) { search.value = ''; filterSources(); document.getElementById(location.hash.slice(1))?.scrollIntoView(); }
    });
    filterSources();
  }
})();
