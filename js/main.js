window.onload = () => {
  'use strict'

  const legend = document.getElementById('legend')
  const northbound = document.getElementById('northbound')
  const southbound = document.getElementById('southbound')
  const northboundWeekend = document.getElementById('northbound-weekend')
  const southboundWeekend = document.getElementById('southbound-weekend')

  legend.style.display = 'none'
  southbound.style.display = 'none'
  northboundWeekend.style.display = 'none'
  southboundWeekend.style.display = 'none'

  const legendNav = document.getElementById('legend-nav')
  const northboundNav = document.getElementById('northbound-nav')
  const southboundNav = document.getElementById('southbound-nav')
  const northboundWeekendNav = document.getElementById('northbound-weekend-nav')
  const southboundWeekendNav = document.getElementById('southbound-weekend-nav')

  legendNav.addEventListener('click', function() {
    legendNav.classList.add('active')
    northboundNav.classList.remove('active')
    southboundNav.classList.remove('active')
    northboundWeekendNav.classList.remove('active')
    southboundWeekendNav.classList.remove('active')

    legend.style.display = ''
    northbound.style.display = 'none'
    southbound.style.display = 'none'
    northboundWeekend.style.display = 'none'
    southboundWeekend.style.display = 'none'
  })
  northboundNav.addEventListener('click', function() {
    legendNav.classList.remove('active')
    northboundNav.classList.add('active')
    southboundNav.classList.remove('active')
    northboundWeekendNav.classList.remove('active')
    southboundWeekendNav.classList.remove('active')

    legend.style.display = 'none'
    northbound.style.display = ''
    southbound.style.display = 'none'
    northboundWeekend.style.display = 'none'
    southboundWeekend.style.display = 'none'
  })
  southboundNav.addEventListener('click', function() {
    legendNav.classList.remove('active')
    northboundNav.classList.remove('active')
    southboundNav.classList.add('active')
    northboundWeekendNav.classList.remove('active')
    southboundWeekendNav.classList.remove('active')

    legend.style.display = 'none'
    northbound.style.display = 'none'
    southbound.style.display = ''
    northboundWeekend.style.display = 'none'
    southboundWeekend.style.display = 'none'
  })
  northboundWeekendNav.addEventListener('click', function() {
    legendNav.classList.remove('active')
    northboundNav.classList.remove('active')
    southboundNav.classList.remove('active')
    northboundWeekendNav.classList.add('active')
    southboundWeekendNav.classList.remove('active')

    legend.style.display = 'none'
    northbound.style.display = 'none'
    southbound.style.display = 'none'
    northboundWeekend.style.display = ''
    southboundWeekend.style.display = 'none'
  })
  southboundWeekendNav.addEventListener('click', function() {
    legendNav.classList.remove('active')
    northboundNav.classList.remove('active')
    southboundNav.classList.remove('active')
    northboundWeekendNav.classList.remove('active')
    southboundWeekendNav.classList.add('active')

    legend.style.display = 'none'
    northbound.style.display = 'none'
    southbound.style.display = 'none'
    northboundWeekend.style.display = 'none'
    southboundWeekend.style.display = ''
  })

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./serviceworker.js')
  }
}