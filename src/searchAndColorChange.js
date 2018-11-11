const searchAndColorChange = (element, colordict) => {

  element.style.backgroundColor = colordict['backgroundColor']
  element.style.color = colordict['color']

  const children = element.children

  for (let child of children) {
    searchAndColorChange(child, colordict)
  }

}

export default searchAndColorChange
