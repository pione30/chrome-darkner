document.addEventListener('DOMContentLoaded', () => {

  const toggle_switch = document.getElementById('darken_toggle')

  toggle_switch.addEventListener('change', () => {
    chrome.tabs.executeScript(
      { code: 'var checked = ' + toggle_switch.checked.toString() + ';' },
      () => {
        chrome.tabs.executeScript(
          { file: './checked.js' }
        )
      }
    )
  })

})
