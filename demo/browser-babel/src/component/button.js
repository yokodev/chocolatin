import './button.css';

const button = props => {
  const element = document.createElement('button');

  element.innerHTML = props.name;

  return element;
};

export default button;
