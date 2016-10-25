export default function (props) {
  var element = document.createElement('button')

  element.innerHTML = props.name

  return element
}
