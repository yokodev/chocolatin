var buttonComponent = require('./component/button');

function render(element) {
  element.appendChild(buttonComponent({ name: 'My btn !' }));
}

render(window.document.getElementById('app'));
