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
    `<div class="error-message">Something went wrong</div>
    <i id="${ICON_ID}" class="material-icons error-close">close</i>`
  )

  const closeIcon = document.getElementById(ICON_ID)
  closeIcon.addEventListener('click', close)

  // there is no need to remove event listener because it will be removed when element is removed.
  // If we used display:none then event listener could be duplicated.

  /**
   * Function that hides error message. Also removes listeners and clears interval (to avoid double call when closed manually)
   */
  function close() {
    if (timer) {
      clearTimeout(timer)
    }

    render(SELECTORS.error, '')
  }

  const timer = setTimeout(close, 5000)
}
