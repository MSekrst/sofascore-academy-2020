function markActiveLink() {
  const path = document.location.pathname.substr(1) // remove prefixed '/'

  const activeLinkElement = document.getElementById(`link-${path || 'home'}`)

  if (activeLinkElement) {
    activeLinkElement.classList.add('active')
  }
}

markActiveLink()

// saves some variable in memory
function changeCounter(value) {
  if (window.counter) {
    window.counter += value
  } else {
    window.counter = value
  }

  console.log('New counter value =', window.counter)
}
