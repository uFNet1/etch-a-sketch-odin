const root = document.querySelector("#app");
const blocksContainer = document.querySelector("#blocks-container");
const changeSizeBtn = document.querySelector("#change-size");
function initialize() {
  changeSizeBtn.onclick = () => {
    changeGrid();
  };
  generateGrid(16);
}
function generateGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.className = "block-row";
    for (let j = 0; j < size; j++) {
      const block = document.createElement("div");
      block.className = "block";
      block.addEventListener("mouseover", () => {
        if (block.matches(":hover")) {
          block.classList.add("painted");
        }
      });

      row.appendChild(block);
    }
    blocksContainer.appendChild(row);
  }
}

initialize();

function changeGrid() {
  let size = prompt("Input size:");
  while (Number(size) > 100) {
    size = prompt("(Can't be more than 100) Input size:");
  }
  blocksContainer.innerHTML = "";
  generateGrid(Number(size));
}
