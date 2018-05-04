import allColorChange from './allColorChange.js'
import { color_definition } from './colorDefinition.js'

allColorChange(
  {
    backgroundColor: checked ? color_definition['checked_backgroundColor'] : color_definition['not_checked_backgroundColor'],

    color: checked ? color_definition['checked_color'] : color_definition['not_checked_color']
  }
)
