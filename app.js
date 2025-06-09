const root = document.querySelector("#app");
const blocksContainer = document.querySelector("#blocks-container");

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

generateGrid(16);
