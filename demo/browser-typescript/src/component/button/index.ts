import './button.css';

interface ButtonProps {
  name: string;
}

const button = (props: ButtonProps): HTMLElement => {
  const element = document.createElement('button');

  element.innerHTML = props.name;

  return element;
};

export default button;
