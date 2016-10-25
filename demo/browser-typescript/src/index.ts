import buttonComponent from './component/button';

const render = (element: HTMLElement): Node =>
  element.appendChild(buttonComponent({ name: 'My btn !' }));

render(document.getElementById('app'));
