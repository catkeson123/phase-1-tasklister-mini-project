const taskList = document.querySelector("#tasks");

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const li = document.createElement("li");
    li.textContent = e.target.newTaskDescription.value;

    const btn = document.createElement("button");
    btn.textContent = "X";
    li.append(btn);

    btn.addEventListener("click", () => {
      li.remove();
    });

    taskList.append(li);
    form.reset();
  });
});
