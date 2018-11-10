import searchAndColorChange from './searchAndColorChange.js'
import { color_definition } from './colorDefinition.js'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {

  const toggle_switch = document.getElementById('darken_toggle')

  toggle_switch.addEventListener('change', () => {

    const checked = toggle_switch.checked

    // change popup.html colors themselves
    searchAndColorChange(document.body.parentNode,
      {
        backgroundColor: checked ? color_definition['checked_backgroundColor'] : color_definition['not_checked_backgroundColor'],

        color: checked ? color_definition['checked_color'] : color_definition['not_checked_color']
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
