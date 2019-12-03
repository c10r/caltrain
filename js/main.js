document.getElementById('northbound-nav').addEventListener('click', function(event) {
  event.preventDefault()
  window.location.replace('/')
})

document.getElementById('southbound-nav').addEventListener('click', function(event) {
  event.preventDefault()
  window.location.replace('south.html')
})

document.getElementById('northbound-weekend-nav').addEventListener('click', function(event) {
  event.preventDefault()
  window.location.replace('northweekend.html')
})

document.getElementById('southbound-weekend-nav').addEventListener('click', function(event) {
  event.preventDefault()
  window.location.replace('southweekend.html')
})

document.getElementById('legend-nav').addEventListener('click', function(event) {
  event.preventDefault()
  window.location.replace('legend.html')
})

window.onload = () => {
  'use strict'

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./serviceworker.js')
  }
}