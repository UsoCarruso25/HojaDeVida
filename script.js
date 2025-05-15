// Mostrar mensaje al hacer clic en el botón
function mostrarMensaje() {
    alert("¡Gracias por visitar mi página! 😊");
  }
  
  // Animar secciones al hacer scroll (fade-in)
  document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // solo animar una vez
        }
      });
    }, {
      threshold: 0.1,
    });
  
    elementos.forEach((el) => observer.observe(el));
  });
  
  // --------- MODO OSCURO / CLARO ---------
  const btnToggle = document.createElement('button');
  btnToggle.textContent = '🌙';
  btnToggle.setAttribute('aria-label', 'Toggle dark mode');
  btnToggle.style = `
    position: fixed; top: 1rem; right: 1rem; 
    background: #0d47a1; color: white; border: none; 
    padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; z-index: 9999;
    font-size: 1.5rem;
  `;
  document.body.appendChild(btnToggle);
  
  function applyTheme(theme) {
    if(theme === 'dark') {
      document.documentElement.style.setProperty('--bg-color', '#121212');
      document.documentElement.style.setProperty('--text-color', '#eee');
      document.documentElement.style.setProperty('--header-text-color', '#eee');
      document.documentElement.style.setProperty('--section-bg', '#1e1e1e');
      document.documentElement.style.setProperty('--section-text-color', '#eee');
      document.documentElement.style.setProperty('--section-hover-shadow', 'rgba(255, 255, 255, 0.1)');
      document.documentElement.style.setProperty('--link-color', '#90caf9');
      document.documentElement.style.setProperty('--button-bg', '#1565c0');
      document.documentElement.style.setProperty('--button-hover-bg', '#0d47a1');
      document.documentElement.style.setProperty('--footer-bg', '#0b3954');
      btnToggle.textContent = '☀️';
    } else {
      document.documentElement.style.setProperty('--bg-color', '#fbfbfb');
      document.documentElement.style.setProperty('--text-color', '#000000');
      document.documentElement.style.setProperty('--header-text-color', 'black');
      document.documentElement.style.setProperty('--section-bg', '#ffffff');
      document.documentElement.style.setProperty('--section-text-color', '#000000');
      document.documentElement.style.setProperty('--section-hover-shadow', 'rgba(0, 0, 0, 0.1)');
      document.documentElement.style.setProperty('--link-color', '#0d47a1');
      document.documentElement.style.setProperty('--button-bg', '#1976d2');
      document.documentElement.style.setProperty('--button-hover-bg', '#1565c0');
      document.documentElement.style.setProperty('--footer-bg', '#0d47a1');
      btnToggle.textContent = '🌙';
    }
  }
  
    
  
  
  btnToggle.addEventListener('click', () => {
    let currentTheme = localStorage.getItem('theme') || 'light';
    if(currentTheme === 'light') {
      applyTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      applyTheme('light');
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Inicializa el tema según la preferencia guardada o por defecto claro
  applyTheme(localStorage.getItem('theme') || 'light');
  
  // --------- EFECTO MÁQUINA DE ESCRIBIR ---------
  function typeWriter(element, text, delay = 100) {
    let i = 0;
    element.textContent = '';
    const timer = setInterval(() => {
      if(i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, delay);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('header.hero h2');
    if(title) {
      const description = "Desarrollador Web Junior con pasión por el diseño y la tecnología.";
      typeWriter(title, description, 100);
    }
  });
  
  // --------- BOTÓN "SUBIR ARRIBA" ---------
  const btnUp = document.createElement('button');
  btnUp.textContent = '⬆️';
  btnUp.style = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #0d47a1;
    color: white;
    border: none;
    padding: 0.7rem 1rem;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    z-index: 1000;
  `;
  document.body.appendChild(btnUp);
  
  btnUp.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
  
  window.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
      btnUp.style.display = 'block';
    } else {
      btnUp.style.display = 'none';
    }
  });
  