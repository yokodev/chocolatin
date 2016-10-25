import buttonComponent from './component/button';

const render: Function = (element: HTMLElement): Node =>
  element.appendChild(buttonComponent({ name: 'My btn !' }));

render(document.getElementById('app'));
