const menu=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.rotation button').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
