const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

function openSidebar() {
  sidebar.classList.add('open');
  sidebar.setAttribute('aria-hidden', 'false');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebar.setAttribute('aria-hidden', 'true');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

sidebar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeSidebar);
});
const registerBtn = document.querySelector('.register-btn');
const formPopup = document.getElementById('form-popup');
const jotformContainer = document.getElementById('jotform-container');
const closeFormBtn = document.querySelector('.close-form-btn');

registerBtn.addEventListener('click', () => {
  formPopup.classList.remove('hidden');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Only load the form once
  if (!jotformContainer.innerHTML.trim()) {
    const script = document.createElement('script');
    script.src = "https://form.jotform.com/jsform/251781937511057";
    jotformContainer.appendChild(script);
  }
});

closeFormBtn.addEventListener('click', () => {
  formPopup.classList.add('hidden');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
});

overlay.addEventListener('click', () => {
  if (!formPopup.classList.contains('hidden')) {
    formPopup.classList.add('hidden');
    document.body.style.overflow = '';
  }
});