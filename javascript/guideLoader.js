function showSection(section) {
    const sections = document.querySelectorAll('.individuals, .companies');
    sections.forEach(sec => sec.style.display = 'none');
    document.querySelector('.' + section).style.display = 'block';

    const offset = 200;
    const element = document.querySelector('.' + section);
    const top = element.getBoundingClientRect().top + window.window.scrollY - offset;

    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  }