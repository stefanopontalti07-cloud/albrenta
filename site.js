document.documentElement.classList.add('js');

// header solido dopo il hero (o quasi subito se la pagina non ne ha uno)
const header = document.getElementById('header');
const heroEl = document.querySelector('.hero, .page-hero');
const onScroll = () => {
  const limit = heroEl ? heroEl.offsetHeight * 0.7 : 10;
  header.classList.toggle('solid', window.scrollY > limit);
};
onScroll();
window.addEventListener('scroll', onScroll, {passive: true});

// menu mobile
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuClose = document.getElementById('menuClose');
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => mobileNav.classList.add('open'));
  menuClose.addEventListener('click', () => mobileNav.classList.remove('open'));
}

// reveal on scroll
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}, {threshold: 0.12, rootMargin: '0px 0px -8% 0px'});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
