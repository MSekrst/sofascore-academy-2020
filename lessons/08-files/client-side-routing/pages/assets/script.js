function unMarkActiveLink() {
  const activeElement = document.querySelector('a.active')

  if (activeElement) {
    activeElement.classList.remove('active')
  }
}

function markActiveLink(page) {
  const activeLinkElement = document.getElementById(`link-${page || 'home'}`)

  if (activeLinkElement) {
    activeLinkElement.classList.add('active')
  }
}

// saves some variable in memory
function changeCounter(value) {
  if (window.counter) {
    window.counter += value
  } else {
    window.counter = value
  }

  console.log('New counter value =', window.counter)
}
