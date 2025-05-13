<script>
  document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.opacity = 0;
      hero.style.transform = 'translateY(50px)';
      setTimeout(() => {
        hero.style.transition = 'all 1s ease';
        hero.style.opacity = 1;
        hero.style.transform = 'translateY(0)';
      }, 300);
    }

    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('cut', e => e.preventDefault());
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && (['c', 'x', 'a'].includes(e.key.toLowerCase()))) {
        e.preventDefault();
      }
    });

    const metaThemeColor = document.createElement('meta');
    metaThemeColor.name = 'theme-color';
    metaThemeColor.content = '#0d1117';
    document.head.appendChild(metaThemeColor);
  });
</script>
