export default function(colordict) {

  let searchAndColorChange = (element) => {
    let children = element.children

    for (let child of children) {
      child.style.backgroundColor = colordict['backgroundColor']
      child.style.color = colordict['color']

      searchAndColorChange(child)
    }
  }

  // To change the color of margin, the style in the 'html' tag
  // should be changed, while document.documentElement is
  // read-only property. So you should access 'html' tag
  // via document.body.parentNode.
  searchAndColorChange(document.body.parentNode)

}
