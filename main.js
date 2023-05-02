// scroll to section when nav link clicked
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // toggle active class on nav links when scrolling to a section
  document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const navLink = document.querySelector(`nav a[href="#${section.id}"]`);
      const rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  });
  
  // open external links in new tab
  document.querySelectorAll('a').forEach(link => {
    if (link.host !== window.location.host) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel','noopener');
    }
  });
  
  // remove active class from nav links on click
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
  