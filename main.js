window.onload = function () {
  let picture = document.querySelector("img");
  let books = document.getElementById("books");

  picture.addEventListener("click", pictureEvent);
  books.addEventListener("click", booksEvent);
};
function pictureEvent(event) {
  console.log("ME!");
}
function booksEvent(event) {
  alert("I like A lot more books!");
}
