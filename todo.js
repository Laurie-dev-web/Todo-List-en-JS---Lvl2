const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

console.log(input, button, ul);

input.focus();

button.addEventListener("click", () => {
  const Clean = input.value.trim();

  if (Clean === "") {
    input.value = "";
    return;
  } else {
    const newLi = document.createElement("li");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";

    newLi.textContent = Clean;

    newLi.appendChild(deleteBtn);

    ul.appendChild(newLi);

    deleteBtn.addEventListener("click", () => {
      newLi.remove();
    });

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    newLi.appendChild(checkbox);

    input.value = "";
    return;
  }
});

// input.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     bouton.click();
//   }
// });
