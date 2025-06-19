(function () {
	// Atalho para o body
	const body = document.body;
  
	// Panel: equivalente ao $.fn.panel()
	HTMLElement.prototype.panel = function (options) {
	  const panel = this;
  
	  // Configurações padrão
	  const settings = Object.assign(
		{
		  delay: 0,
		  hideOnClick: false,
		  hideOnSwipe: false,
		  resetScroll: false,
		  resetForms: false,
		  side: null,
		  target: body,
		  visibleClass: "visible"
		},
		options
	  );
  
	  // Estado de visibilidade
	  let isVisible = false;
  
	  // Esconde o painel
	  const hide = () => {
		if (!isVisible) return;
  
		if (settings.resetScroll) panel.scrollTop = 0;
  
		if (settings.resetForms) {
		  panel.querySelectorAll("form").forEach((form) => form.reset());
		}
  
		panel.classList.remove(settings.visibleClass);
		settings.target.classList.remove(settings.visibleClass);
  
		isVisible = false;
	  };
  
	  // Mostra o painel
	  const show = () => {
		if (isVisible) return;
  
		panel.classList.add(settings.visibleClass);
		settings.target.classList.add(settings.visibleClass);
  
		isVisible = true;
	  };
  
	  // Alterna o painel
	  const toggle = () => {
		if (isVisible) hide();
		else show();
	  };
  
	  // Clique em links com toggle
	  panel.querySelectorAll(".close").forEach((el) =>
		el.addEventListener("click", (e) => {
		  e.preventDefault();
		  e.stopPropagation();
		  hide();
		})
	  );
  
	  // Clique fora do painel
	  if (settings.hideOnClick) {
		document.addEventListener("click", (e) => {
		  if (!panel.contains(e.target)) {
			hide();
		  }
		});
	  }
  
	  // Swipe lateral para esconder (mobile)
	  if (settings.hideOnSwipe) {
		let startX = null;
		let startY = null;
  
		panel.addEventListener("touchstart", (e) => {
		  startX = e.touches[0].clientX;
		  startY = e.touches[0].clientY;
		});
  
		panel.addEventListener("touchmove", (e) => {
		  if (!startX || !startY) return;
  
		  let dx = e.touches[0].clientX - startX;
		  let dy = e.touches[0].clientY - startY;
  
		  if (Math.abs(dx) > Math.abs(dy)) {
			if (
			  (dx > 50 && settings.side === "left") ||
			  (dx < -50 && settings.side === "right")
			) {
			  hide();
			  startX = null;
			  startY = null;
			}
		  }
		});
	  }
  
	  // Toggle manual
	  const toggles = document.querySelectorAll(`[href="#${panel.id}"], .toggle`);
	  toggles.forEach((el) =>
		el.addEventListener("click", (e) => {
		  e.preventDefault();
		  e.stopPropagation();
		  toggle();
		})
	  );
  
	  return panel;
	};
  
	// Prioritize: mover elementos baseados em condição (equivalente ao $.prioritize)
	window.prioritize = (condition, elements) => {
	  elements.forEach((el) => {
		if (!el.dataset.originalPosition) {
		  el.dataset.originalPosition = el.parentNode.innerHTML;
		}
  
		if (condition) {
		  el.parentNode.insertBefore(el, el.parentNode.firstChild);
		} else {
		  el.outerHTML = el.dataset.originalPosition;
		}
	  });
	};
  })();
  