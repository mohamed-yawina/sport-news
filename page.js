document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.querySelector('.back-to-top-btn');
  
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) { // Adjust scroll distance as needed
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
  
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });