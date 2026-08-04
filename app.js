document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");
  const menuIcon = menuToggle.querySelector("i");
  const navLinks = document.querySelectorAll("#nav-menu a");
  const menuOverlay = document.getElementById("menu-overlay");
  const form = document.getElementById("contact-form");
  const modal = document.getElementById("portfolio-modal");
  const triggers = document.querySelectorAll(".portfolio-trigger");
  const closeModalBtn = document.querySelector(".close-modal");
  const modalImg = document.getElementById("modal-img");
  const modalDescription = document.getElementById("modal-description");

  const fecharMenuMobile = () => {
    navMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
    document.body.style.overflow = "";
  };

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
      document.body.style.overflow = "hidden";
    } else {
      fecharMenuMobile();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", fecharMenuMobile);
  });

  if (menuOverlay) {
    menuOverlay.addEventListener("click", fecharMenuMobile);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
      header.style.padding = "10px 0";
    } else {
      header.style.boxShadow = "none";
      header.style.padding = "15px 0";
    }
  });

  const portfolioData = {
    1: {
      fullImgSrc: "https://plus.unsplash.com/premium_photo-1719617672948-862f2f06e2a1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Você também sofre com o olhar cansado?<br>Nós podemos te ajudar.<br><br>Quando dizemos que tudo que é bonito pode ser melhorado. Confira o resultado e veja como ela ficou ainda mais linda e confiante!<br><br><span style='color: var(--primary-color); font-size: 0.85rem;'>#preenchimentodeolheira #harmonizacaofacial #estetica</span>",
    },
    2: {
      fullImgSrc: "https://images.unsplash.com/photo-1598300188904-6287d52746ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Não é sobre Harmonizar. É sobre realçar o que você tem de melhor!<br><br>Paciente com o pós imediato e um inchaço no lábio esperado. Cada organismo responde de uma forma, mas o resultado final é sempre natural.<br><br><span style='color: var(--primary-color); font-size: 0.85rem;'>#harmonizacaofacial #beleza #esteticaavancada</span>",
    },
    3: {
      fullImgSrc: "https://images.unsplash.com/photo-1731514771613-991a02407132?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Olhar-se no espelho e sentir-se cansada mesmo após uma noite de sono é um sinal de que sua autoestima pede um resgate.<br><br>Não é sobre exageros, é sobre autoridade com naturalidade.<br>Você tem o poder da escolha.<br>Escolha se cuidar!<br><br><span style='color: var(--primary-color); font-size: 0.85rem;'>#harmonizacaofacial #fullface #autoestima</span>",
    },
    4: {
      fullImgSrc: "https://plus.unsplash.com/premium_photo-1683134308299-87f073623ba3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Nossa paciente escolheu passar essa data na sua melhor versão.<br><br>E essa atitude trouxe resultados visíveis.. transbordando amor próprio, autoestima mais elevada e beleza.<br><br>Qual versão sua você prefere?",
    },
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      fecharMenuMobile();
      const id = this.getAttribute("data-id");
      const data = portfolioData[id];
      if (data) {
        modalImg.src = data.fullImgSrc;
        modalDescription.innerHTML = data.description;
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const mensagemEnviada = document.getElementById("mensagem").value;
    const numeroWhatsApp = "5511900000000";
    const mensagem = `Olá, clínica! Meu nome é *${nome}* e preenchi o formulário no site.

Mensagem: ${mensagemEnviada}`;
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, "_blank");
    form.reset();
  });

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("mostrar");
          observador.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const elementosParaAnimar = document.querySelectorAll(".animar-scroll");
  elementosParaAnimar.forEach((elemento) => {
    observador.observe(elemento);
  });
});