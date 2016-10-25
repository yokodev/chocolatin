import buttonComponent from './component/button'

function render (element) {
  element.appendChild(buttonComponent({ name: 'My btn !' }))
}

render(document.getElementById('app'))
