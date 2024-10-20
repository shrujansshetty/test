document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('.background');
  
    document.addEventListener('mousemove', function (e) {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
  
      const moveX = (mouseX - 0.5) * 100;
      const moveY = (mouseY - 0.5) * 100;
  
      background.style.backgroundPosition = `calc(50% + ${-moveX}px) calc(50% + ${-moveY}px)`;
    });
  });
  