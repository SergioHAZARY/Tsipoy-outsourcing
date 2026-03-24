// Particles
const container = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 4 + 1;
  p.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random()*100}%;
    animation-duration:${6+Math.random()*14}s;
    animation-delay:${Math.random()*8}s;
    opacity:0;
  `;
  container.appendChild(p);
}

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Nav scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,.5)' : 'none';
});

// Hamburger
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'))
);

// Form submit
function submitForm(e) {
  e.preventDefault();
  const s = document.getElementById('formSuccess');
  s.style.display = 'block';
  e.target.reset();
  setTimeout(() => s.style.display = 'none', 5000);
}
