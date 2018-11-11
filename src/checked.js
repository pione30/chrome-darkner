import searchAndColorChange from './searchAndColorChange.js'
import colorDefinition from './colorDefinition.js'

chrome.runtime.onMessage.addListener(
  function(request) {
    // To change the color of margin, the style in the 'html' tag
    // should be changed, while document.documentElement is
    // read-only property. So you should access 'html' tag
    // via document.body.parentNode.
    searchAndColorChange(document.body.parentNode, colorDefinition(request.checked))
  }
)
