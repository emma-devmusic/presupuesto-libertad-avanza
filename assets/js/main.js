const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
}

// Seleccionamos todas las secciones que tienen el atributo data-animated
const observedElement = document.querySelectorAll('[data-animated]')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const animationType = entry.target.dataset.animated
      if (animationType === 'fade-right') {
        entry.target.classList.add('animate-slideRight')
      } else if (animationType === 'fade-left') {
        entry.target.classList.add('animate-slideLeft')
      }
      // Una vez animado, el Observador deja de monitorearlo
      observer.unobserve(entry.target)
    }
  })
}, options)

observedElement.forEach(el => el.classList.add('opacity-0'))
observedElement.forEach(el => observer.observe(el))

const layers = document.querySelectorAll('.parallax-layer')
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset // Distancia scrolleada
  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed')
    // Calculamos el desplazamiento
    const yPos = -(scrollTop * speed)
    layer.style.transform = `translateY(${yPos}px)`
  })
})
