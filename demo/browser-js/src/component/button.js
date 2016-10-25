module.exports = function(props) {
  const element = document.createElement('button');

  element.textContent = props.name;

  return element;
};
