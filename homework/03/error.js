/**
 * Display error message for user and print actual error into the console.
 *
 * @param {Error} error
 */
function showError(error) {
  console.error(error)

  const ICON_ID = 'icon-close'

  render(
    SELECTORS.error,
    `<div class="error-message">Something went wrong</div><i id="${ICON_ID}" class="material-icons error-close">close</i>`
  )

  const closeIcon = document.getElementById(ICON_ID)
  closeIcon.addEventListener('click', close)

  /**
   * Function that hides error message. Also removes listeners and clears interval (to avoid double call when closed manually)
   */
  function close() {
    // if (timer) {
    //   clearTimeout(timer)
    // }

    closeIcon.removeEventListener('click', close)
    render(SELECTORS.error, '')
    isErrorVisible = false
  }

  // const timer = setTimeout(close, 5000)
}
