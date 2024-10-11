function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


window.addEventListener('scroll', function() {
    const img = document.querySelector('.section_pic-container img');
    const scrollY = window.scrollY; 
    const scaleValue = Math.max(0.5, 1 - scrollY / 500);

    img.style.transform = `scale(${scaleValue})`; 
});

