window.onload = () => {
  'use strict'

  document.getElementById('legend').style.display = 'none'
  document.getElementById('southbound').style.display = 'none'

  const legendNav = document.getElementById('legend-nav')
  const northboundNav = document.getElementById('northbound-nav')
  const southboundNav = document.getElementById('southbound-nav')
  const weekendNav = document.getElementById('weekend-nav')

  const legend = document.getElementById('legend')
  const northbound = document.getElementById('northbound')
  const southbound = document.getElementById('southbound')
  const weekend = document.getElementById('weekend')

  legendNav.addEventListener('click', function() {
    legendNav.classList.add('active')
    northboundNav.classList.remove('active')
    southboundNav.classList.remove('active')
    weekendNav.classList.remove('active')

    legend.style.display = ''
    northbound.style.display = 'none'
    southbound.style.display = 'none'
    weekendNav.style.display = 'none'
  })
  northboundNav.addEventListener('click', function() {
    legendNav.classList.remove('active')
    northboundNav.classList.add('active')
    southboundNav.classList.remove('active')
    weekendNav.classList.remove('active')

    legend.style.display = 'none'
    northbound.style.display = ''
    southbound.style.display = 'none'
    weekend.style.display = 'none'
  })
  southboundNav.addEventListener('click', function() {
    legendNav.classList.remove('active')
    northboundNav.classList.remove('active')
    southboundNav.classList.add('active')
    weekendNav.classList.remove('active')

    legend.style.display = 'none'
    northbound.style.display = 'none'
    southbound.style.display = ''
    weekend.style.display = 'none'
  })
  weekendNav.addEventListener('click', function() {
    legendNav.classList.remove('active')
    northboundNav.classList.remove('active')
    southboundNav.classList.remove('active')
    weekendNav.classList.add('active')

    legend.style.display = 'none'
    northbound.style.display = 'none'
    southbound.style.display = 'none'
    weekend.style.display = ''
  })

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./serviceworker.js')
  }
}