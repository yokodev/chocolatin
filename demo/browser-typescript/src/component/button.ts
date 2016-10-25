interface ButtonProps {
  name: string;
}

export default (props: ButtonProps): HTMLElement => {
  const element = document.createElement('button');

  element.innerHTML = props.name;

  return element;
};
