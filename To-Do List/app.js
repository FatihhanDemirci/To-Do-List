const form = document.querySelector("#todoAddForm");
const input = document.querySelector("#todoName");
const addBtn = document.querySelector("#todoAddButton");
const searchInput = document.querySelector("#todoSearch");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const ul = document.querySelector(".list-group");
const clrBtn = document.querySelector("#clearButton");

form.addEventListener("submit", (e) => {
  let inputValue = input.value.trim();
  if (inputValue == "" || inputValue == null) {
    console.log("Geçersiz");
  } else {
    addTask(inputValue);
  }
  e.preventDefault();
});

const addTask = (task) => {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.textContent = task;
  const a = document.createElement("a");
  a.className = "delete-item";
  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  ul.appendChild(li);
  input.value = "";
};

secondCardBody.addEventListener("click", (e) => {
  if (e.target.className === "fa fa-remove") {
    const todo = e.target.parentElement.parentElement;
    todo.remove();
  }
});

clrBtn.addEventListener("click", () => {
  ul.innerHTML = "";
});
