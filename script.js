document.addEventListener('mousemove', (e) => {
    const skull = document.createElement('div');
    skull.classList.add('skull');
    skull.textContent = '☠︎︎';
    document.body.appendChild(skull);
  
    skull.style.left = `${e.pageX}px`;
    skull.style.top = `${e.pageY}px`;
  
    // Optional: add a little randomness to position or rotation
    skull.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
  
    // Remove after fade
    setTimeout(() => {
      skull.remove();
    }, 10000); // 5 seconds
  });
     
  function createStars(numStars) {
      const starOptions = [ "☆", "❤︎", "♱"]; // Array of star-like symbols
  
      for (let i = 0; i < numStars; i++) {
          let star = document.createElement("div");
          star.classList.add("star");
  
          // Pick a random symbol from the array
          let randomSymbol = starOptions[Math.floor(Math.random() * starOptions.length)];
          star.innerHTML = randomSymbol;
  
          // Random position and size
          let x = Math.random() * window.innerWidth;
          let y = Math.random() * window.innerHeight;
          let size = Math.random() * 80 + 10;
  
          star.style.left = `${x}px`;
          star.style.top = `${y}px`;
          star.style.fontSize = `${size}px`;
  
          document.body.appendChild(star);
      }
  }
  
  window.addEventListener("load", function () {
      if (window.innerWidth > 775) {
          createStars(30);
      }
  });
  
  
  const circleBtn = document.querySelector('.circle-btn');
      const navLinks = document.querySelector('.nav-links');
      const closeBtnNav = document.querySelector('.nav-links .close-btn');
      const contentSections = document.querySelectorAll('.content');
      const linkBtns = document.querySelectorAll('.nav-link');
      const nameHeader = document.getElementById('nameHeader'); 
  
      
     
    const flashImages = [];
    for (let i = 1; i <= 33; i++) {
      flashImages.push(`flash/flashv/${i}.png`);
    }
  
    document.getElementById('lucky-button').addEventListener('click', () => {
    const wrappers = document.querySelectorAll('.mannequin-wrapper');
  
    wrappers.forEach(wrapper => {
      const container = wrapper.querySelector('.tattoo-container');
      
      // Clear previous tattoos
      container.innerHTML = '';
  
      for (let i = 0; i < 3; i++) {
        const img = document.createElement('img');
        img.src = flashImages[Math.floor(Math.random() * flashImages.length)];
        img.classList.add('tattoo');
  
        // Random size between 40px and 100px
        const randomSize = 60 + Math.random() * 100;
        img.style.width = `${randomSize}px`;
  
        // Random position
        img.style.top = `${Math.random() * 70}%`;
        img.style.left = `${Math.random() * 50}%`;
  
        // Random rotation
        const angle = Math.floor(Math.random() * 360);
        img.style.setProperty('--rotation', `${angle}deg`);
  
        container.appendChild(img);
      }
    });
  });
  
  
  
     
      closeBtnNav.addEventListener('click', () => {
          circleBtn.classList.remove('active');
          navLinks.classList.remove('active');
      });
  
      linkBtns.forEach(link => {
          link.addEventListener('click', (e) => {
              e.preventDefault();
              const contentId = link.getAttribute('data-content');
              const contentDiv = document.getElementById(contentId);
  
            
              contentSections.forEach(section => {
                  section.classList.remove('active');
              });
  
              contentDiv.classList.add('active');
  
              changingText.style.display = 'none';
              contactBar.style.display = 'none';
          });
      });
  
      const closeBtns = document.querySelectorAll('.content .close-btn');
      closeBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
              const contentDiv = e.target.closest('.content');
              contentDiv.classList.remove('active');
  
              if (![...contentSections].some(section => section.classList.contains('active'))) {
                  changingText.style.display = 'block';
                  contactBar.style.display = 'block';
              }
          });
      });
  