
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) { 
      
        navbar.style.backgroundColor = '#ff6600'; 
        
    } else {
        navbar.style.backgroundColor = '#333'; 
      
    }
});
