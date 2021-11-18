window.onload = function () {
  let toggles = document.querySelectorAll("p");
  for (let toggle of toggles) {
    toggle.addEventListener("click", addItem);
  }
};

function addItem(event) {
  console.log(event.target.innerHTML);
  let item = document.createElement("p");
  let node = document.createTextNode(event.target.innerHTML);
  let list = document.getElementById("list");
  item.appendChild(node);
  item.addEventListener("click", removeItem);
  list.appendChild(item);
}

function removeItem(event) {
  console.log(event.target.innerHTML);
  event.target.remove();
}
