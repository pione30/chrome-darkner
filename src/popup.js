document.addEventListener('DOMContentLoaded', () => {

  const toggle_switch = document.getElementById('darken_toggle')

  toggle_switch.addEventListener('change', () => {

    // change popup.html colors
    document.body.style.backgroundColor = toggle_switch.checked ? '#0a0a0a' : 'white'
    document.body.style.color = toggle_switch.checked ? '#aaaaaa' : 'black'

    // change colors of current tab
    chrome.tabs.executeScript(
      { code: 'var checked = ' + toggle_switch.checked.toString() + ';' },
      () => {
        chrome.tabs.executeScript(
          { file: './js/checked.js' }
        )
      }
    )

  })

})
