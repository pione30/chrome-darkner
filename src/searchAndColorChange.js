const searchAndColorChange = (element, colordict, excludedNodes = []) => {
  // elements of and under excludedNodes will not be changed
  if(excludedNodes.includes(element.nodeName.toLowerCase())) return

  element.style.backgroundColor = colordict['backgroundColor']
  element.style.color = colordict['color']

  const children = element.children

  for (let child of children) {
    searchAndColorChange(child, colordict, excludedNodes)
  }

}

export default searchAndColorChange
