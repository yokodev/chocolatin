require('./button.css');

/* global window */
function button(props) {
  var element = window.document.createElement('button');

  element.innerHTML = props.name;

  return element;
}

module.exports = button;
