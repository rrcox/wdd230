const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    button.click();
  }
});

button.onclick = () => {
  let newChapter = input.value;
  input.value = "";

  if (newChapter !== "") {
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = newChapter;
    listItem.appendChild(listBtn);
    listBtn.textContent = "X";
    listBtn.style.fontSize = "1.2em";
    listBtn.style.fontWeight = "bold";
    listBtn.style.color = "red";
    listBtn.style.width = "50px";
    listBtn.style.height = "50px";
    list.appendChild(listItem);

    listBtn.onclick = (e) => {
      list.removeChild(listItem);
    };

    input.focus();
  }
};
