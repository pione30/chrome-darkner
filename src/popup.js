import searchAndColorChange from './searchAndColorChange.js'
import colorDefinition from './colorDefinition.js'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {

  const toggle_switch = document.getElementById('darken_toggle')

  // inject content scripts which recieves a message
  chrome.tabs.executeScript(
    { file: './js/checked.js' }
  )

  toggle_switch.addEventListener('change', () => {

    const checked = toggle_switch.checked

    // change popup.html colors themselves
    searchAndColorChange(document.body.parentNode, colorDefinition(checked))

    // change colors of current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { checked: checked })
    })

  })

})
