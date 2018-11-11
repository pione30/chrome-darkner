import searchAndColorChange from './searchAndColorChange.js'
import colorDefinition from './colorDefinition.js'

chrome.runtime.onMessage.addListener(
  (request) => {
    searchAndColorChange(document.documentElement, colorDefinition(request.checked))
  }
)
