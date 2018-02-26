export default function(colordict) {

  let searchAndColorChange = (element) => {
    let children = element.children

    for (let child of children) {
      child.style.backgroundColor = colordict['backgroundColor']
      child.style.color = colordict['color']

      searchAndColorChange(child)
    }
  }

  searchAndColorChange(document.body) 
}
