import allColorChange from './allColorChange.js'

document.addEventListener('DOMContentLoaded', () => {

  const toggle_switch = document.getElementById('darken_toggle')

  toggle_switch.addEventListener('change', () => {

    const checked = toggle_switch.checked

    // change popup.html colors themselves
    allColorChange(
      {
        backgroundColor: checked ? '#0a0a0a' : 'white',
        color: checked ? '#aaaaaa' : 'black'
      }
    )

    // change colors of current tab
    chrome.tabs.executeScript(
      { code: 'var checked = ' + checked.toString() + ';' },
      () => {
        chrome.tabs.executeScript(
          { file: './js/checked.js' }
        )
      }
    )

  })

})
