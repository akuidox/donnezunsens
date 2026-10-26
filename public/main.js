// Photo manquante : on affiche un emplacement « Photo à venir »
document.querySelectorAll('.ph img').forEach((img) => {
  const fig = img.closest('.ph');
  const hide = () => fig.classList.add('missing');
  if (img.complete && img.naturalWidth === 0) hide();
  else img.addEventListener('error', hide);
});

// Logo manquant : on affiche le nom de la fondation en texte
document.querySelectorAll('.found-logo img, .person-org, [data-fallback]').forEach((img) => {
  const swap = () => {
    const span = document.createElement('span');
    span.className = 'logo-missing';
    span.textContent = img.dataset.fallback || img.alt;
    if (img.dataset.fallback) span.classList.add('brand-text');
    img.replaceWith(span);
  };
  if (img.complete && img.naturalWidth === 0) swap();
  else img.addEventListener('error', swap);
});

// Carrousels de photos (flèches + points)
document.querySelectorAll('[data-slider]').forEach((slider) => {
  const track = slider.querySelector('.track');
  const slides = [...track.children];
  if (slides.length < 2) return;

  const make = (cls, label, text) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'arrow ' + cls; b.setAttribute('aria-label', label); b.textContent = text;
    slider.appendChild(b);
    return b;
  };
  const prev = make('prev', 'Photo précédente', '‹');
  const next = make('next', 'Photo suivante', '›');

  const dots = document.createElement('div');
  dots.className = 'dots';
  const dotBtns = slides.map((_, i) => {
    const d = document.createElement('button');
    d.type = 'button'; d.setAttribute('aria-label', 'Photo ' + (i + 1));
    d.addEventListener('click', () => go(i));
    dots.appendChild(d);
    return d;
  });
  slider.appendChild(dots);

  const current = () => Math.round(track.scrollLeft / track.clientWidth);
  const go = (i) => track.scrollTo({ left: ((i + slides.length) % slides.length) * track.clientWidth });
  const mark = () => dotBtns.forEach((d, i) => d.setAttribute('aria-current', i === current() ? 'true' : 'false'));

  prev.addEventListener('click', () => go(current() - 1));
  next.addEventListener('click', () => go(current() + 1));
  track.addEventListener('scroll', () => requestAnimationFrame(mark), { passive: true });
  mark();
});

// Vidéos YouTube : l'image s'affiche d'abord, la vidéo se charge au clic
document.querySelectorAll('.yt').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (!/^https?:$/.test(location.protocol)) return; // fichier local : ouvre YouTube
    e.preventDefault();
    const f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + link.dataset.yt + '?autoplay=1&rel=0';
    f.title = link.getAttribute('aria-label').replace('Lire la vidéo : ', '');
    f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    const box = document.createElement('div');
    box.className = 'video';
    box.appendChild(f);
    link.replaceWith(box);
  });
});

// Année courante dans le pied de page
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
