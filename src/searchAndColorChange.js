const searchAndColorChange = (element, colordict) => {

  let children = element.children

  for (let child of children) {
    child.style.backgroundColor = colordict['backgroundColor']
    child.style.color = colordict['color']

    searchAndColorChange(child, colordict)
  }

}

export default searchAndColorChange
