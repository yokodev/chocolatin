import buttonComponent from './component/button';

const render = element => element.appendChild(buttonComponent({ name: 'My btn !' }));

render(document.getElementById('app'));
