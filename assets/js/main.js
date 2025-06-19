document.addEventListener("DOMContentLoaded", () => {
	const body = document.body;
	const header = document.getElementById("header");
	const nav = document.getElementById("nav");
	const titleBar = document.createElement("div");

  
	// Criação da barra de título
	titleBar.id = "titleBar";
	titleBar.innerHTML = `
	  <a href="#header" class="toggle"></a>
	  <span class="title">${document.getElementById("logo").innerHTML}</span>
	`;
	body.appendChild(titleBar);
  
	// Função para calcular o offset de rolagem baseado na tela
	function getScrollOffset() {
	  if (window.matchMedia("(max-width: 480px)").matches) {
		return 60;
	  } else if (window.matchMedia("(max-width: 736px)").matches) {
		return 70;
	  } else if (window.matchMedia("(max-width: 1024px)").matches) {
		return titleBar.offsetHeight;
	  } else {
		return 0;
	  }
	}
  
	// Atualiza o scroll-margin-top de todas as sections
	function updateScrollMargin() {
	  const offsetValue = `${getScrollOffset()}px`;
	  const allSections = document.querySelectorAll("section");
	  allSections.forEach((section) => {
		section.style.scrollMarginTop = offsetValue;
	  });
	}
  
	// Executa a primeira vez ao carregar DOM
	updateScrollMargin();
  
	// Atualiza o scroll-margin-top ao redimensionar a janela
	window.addEventListener("resize", updateScrollMargin);
  
	// Remove classe de preload após carregamento
	window.addEventListener("load", () => {
	  setTimeout(() => {
		body.classList.remove("is-preload");
	  }, 100);
	});
  
	// Verifica suporte a object-fit
	if (!("objectFit" in document.documentElement.style)) {
	  document.querySelectorAll(".image[data-position]").forEach((el) => {
		const img = el.querySelector("img");
		el.style.backgroundImage = `url("${img.src}")`;
		el.style.backgroundPosition = el.dataset.position;
		el.style.backgroundSize = "cover";
		el.style.backgroundRepeat = "no-repeat";
		img.style.opacity = "0";
	  });
	}
  
	// Painel lateral (requer que o plugin "panel()" já esteja convertido para JS puro)
	header.panel({
	  delay: 500,
	  hideOnClick: true,
	  hideOnSwipe: true,
	  resetScroll: true,
	  resetForms: true,
	  side: "right",
	  target: body,
	  visibleClass: "header-visible",
	});
  
	// Navegação com scroll suave
	const navLinks = nav.querySelectorAll("a");
	const sections = Array.from(navLinks)
	  .map((link) => document.querySelector(link.getAttribute("href")))
	  .filter((section) => section);
  
	let activeLockedLink = null;
  
	navLinks.forEach((link) => {
	  link.classList.add("scrolly");
  
	  link.addEventListener("click", (e) => {
		const href = link.getAttribute("href");
		if (!href.startsWith("#")) return;
  
		e.preventDefault();
  
		navLinks.forEach((l) => l.classList.remove("active", "active-locked"));
		link.classList.add("active", "active-locked");
		activeLockedLink = link;
  
		const target = document.querySelector(href);
		if (!target) return;
  
		const offset = getScrollOffset();
		const targetY = target.getBoundingClientRect().top + window.scrollY - offset;
  
		window.scrollTo({
		  top: targetY,
		  behavior: "smooth",
		});
  
		setTimeout(() => {
		  if (activeLockedLink === link) {
			activeLockedLink = null;
			link.classList.remove("active-locked");
			updateActiveNavLink();
		  }
		}, 800);
	  });
	});
  
	// Atualiza o item do menu ao rolar
	const updateActiveNavLink = () => {
	  if (activeLockedLink) return;
  
	  const offset = getScrollOffset();
	  const detectionLine = offset + 10; // antecipa o gatilho da ativação
  
	  let currentActiveSection = null;
	  let closestDistance = Infinity;
  
	  sections.forEach((section) => {
		const rect = section.getBoundingClientRect();
		const distance = Math.abs(rect.top - detectionLine);
  
		if (
		  rect.top <= detectionLine &&
		  rect.bottom > detectionLine &&
		  distance < closestDistance
		) {
		  currentActiveSection = section;
		  closestDistance = distance;
		}
	  });
  
	  navLinks.forEach((link) => link.classList.remove("active"));
  
	  if (currentActiveSection) {
		const correspondingLink = Array.from(navLinks).find(
		  (link) => link.getAttribute("href") === `#${currentActiveSection.id}`
		);
		if (correspondingLink) correspondingLink.classList.add("active");
	  }
	};
  
	document.addEventListener("scroll", updateActiveNavLink);
	updateActiveNavLink(); // executa uma vez no carregamento
  });
  