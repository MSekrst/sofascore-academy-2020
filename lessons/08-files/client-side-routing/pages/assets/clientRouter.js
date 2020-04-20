function clientLink(event) {
  // prevent default link behaviour
  event.preventDefault()
  const href = event.currentTarget.href // e.g. http://localhost:5000/about
  const host = document.location.host // e.g. localhost:5000

  // get only path part of the href
  const path = href.substring(href.indexOf(host) + host.length) // e.g. /about
  const pageName = path.substring(1) // e.g. about

  // add url to browser history without visiting link
  // this method is core principle behind client routing
  // first argument is state, which can be accessed using `history.state`
  window.history.pushState({ page: pageName }, '', path)

  // render new page
  render()
}

function getContentElement() {
  return document.getElementById('content')
}

function renderHomePage() {
  const contentElement = getContentElement()

  contentElement.innerHTML = 'Home'
}

function renderAboutPage() {
  const contentElement = getContentElement()

  contentElement.innerHTML = 'About'
}

function renderProfilePage() {
  const contentElement = getContentElement()

  contentElement.innerHTML = 'Profile'
}

function render() {
  const page = history.state && history.state.page

  switch (page) {
    case 'home':
      renderHomePage()
      break
    case 'about':
      renderAboutPage()
      break
    case 'profile':
      renderProfilePage()
      break

    // default can be used to render 404 page if needed
    default:
      renderHomePage()
  }

  unMarkActiveLink()
  markActiveLink(page)
}

// initial render
render()
