import searchAndColorChange from './searchAndColorChange.js'
import { color_definition } from './colorDefinition.js'

// To change the color of margin, the style in the 'html' tag
// should be changed, while document.documentElement is
// read-only property. So you should access 'html' tag
// via document.body.parentNode.
searchAndColorChange(document.body.parentNode,
  {
    backgroundColor: checked ? color_definition['checked_backgroundColor'] : color_definition['not_checked_backgroundColor'],

    color: checked ? color_definition['checked_color'] : color_definition['not_checked_color']
  }
)
