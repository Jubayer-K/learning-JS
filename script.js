// document.getElementById("first").addEventListener("click", function (event) {
//   console.log("first item clicked");
//   event.stopPropagation();
// });
// document.getElementById("myList").addEventListener("click", function (event) {
//   console.log("List clicked");
// });
// document
//   .getElementById("container")
//   .addEventListener("click", function (event) {
//     console.log("Container clicked");
//   });
const items = document.getElementsByTagName("li");
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  //   item.addEventListener("click", function (event) {
  //     event.target.parentNode.removeChild(event.target);
  //   });
  //   // item.addEventListener('click',function(event){
  //   //     console.log(this);
  //   // })
}
document.getElementById("myList").addEventListener("click", function (event) {
  event.target.parentNode.removeChild(event.target);
});
document.getElementById("addNew").addEventListener("click", function (event) {
  var itemParent = document.getElementById("myList");
  var newItem = document.createElement("li");
  newItem.innerText = "Brand New Item";
  itemParent.appendChild(newItem);
});
