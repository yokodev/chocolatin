const buttonComponent = require('./component/button')

function render (element) {
  element.append(buttonComponent('My btn !'))
}

render(document.getElementById('app'))
