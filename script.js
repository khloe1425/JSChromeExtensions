replaceText(document.body);

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/COVID-19/gi)) {
      const newElement = document.createElement('span');
      newElement.innerHTML = element.textContent.replace(
        /(COVID-19)/gi,
        '<span style="background-color: black;color : black;">###</span>'
      );
      element.replaceWith(newElement);
    }
  }
}
