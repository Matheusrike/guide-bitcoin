function showSection(section) {
  const sections = document.querySelectorAll('.individuals, .companies');
  sections.forEach(sec => sec.style.display = 'none');
  document.querySelector('.' + section).style.display = 'block';
  
  const offset = 70;
  const element = document.querySelector('.' + section);
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  
  window.scrollTo({
    top: top,
    behavior: 'smooth'
  });
}

// Exibir a seção inicial sem rolar
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.individuals').style.display = 'block';
});
