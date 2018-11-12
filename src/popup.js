import searchAndColorChange from './searchAndColorChange.js'
import colorDefinition from './colorDefinition.js'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {

  const toggle_switch = document.getElementById('darken_toggle')
  const includedNodes = document.querySelectorAll('#includedNodes label input')

  // inject content scripts which recieves a message
  chrome.tabs.executeScript(
    { file: './js/checked.js' }
  )

  toggle_switch.addEventListener('change', () => {

    const checked = toggle_switch.checked

    let excludedNodes = []
    for(const includeNode of includedNodes) {
      if(!includeNode.checked) {
        excludedNodes.push(includeNode.value)
      }
    }

    // change popup.html colors themselves
    searchAndColorChange(document.documentElement, colorDefinition(checked), excludedNodes)

    // change colors of current tab
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        checked: checked,
        excludedNodes: excludedNodes
      })
    })

  })

})
