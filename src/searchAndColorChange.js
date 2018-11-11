const searchAndColorChange = (element, colordict, excludeNodes = []) => {
  // elements of and under excludeNodes will not be changed
  if(excludeNodes.includes(element.nodeName.toLowerCase())) return

  element.style.backgroundColor = colordict['backgroundColor']
  element.style.color = colordict['color']

  const children = element.children

  for (let child of children) {
    searchAndColorChange(child, colordict, excludeNodes)
  }

}

export default searchAndColorChange
