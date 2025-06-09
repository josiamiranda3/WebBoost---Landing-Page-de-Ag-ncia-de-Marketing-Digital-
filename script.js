document.addEventListener("DOMContentLoaded", function () {
  
  // Efeito Typewriter (máquina de escrever)
  const text = "A Agência que Impulsiona seu Negócio com a Energia da Bahia";
  const typewriter = document.getElementById("typewriter");
  let i = 0;
  function type() {
    if (typewriter && i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();

  // Slider de Depoimentos
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  if (slides.length > 0) {
    showSlide(currentSlide); // Mostra o primeiro slide imediatamente
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3500);
  }
  
  // Validação do Formulário de Contato
  const form = document.getElementById("form");
  const formMsg = document.getElementById("form-msg");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      formMsg.textContent = "Obrigado! Sua mensagem foi enviada com sucesso!";
      form.reset();
      setTimeout(() => (formMsg.textContent = ""), 4000);
    });
  }

  // Animação de Scroll ao aparecer na tela
  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
  
});