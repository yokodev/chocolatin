require('./button.css');

function button(props) {
  var element = document.createElement('button');

  element.innerHTML = props.name;

  return element;
}

module.exports = button;
