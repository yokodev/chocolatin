export default (props) => {
  const element = document.createElement('button');

  element.innerHTML = props.name;

  return element
};
