const root = document.querySelector("#app");
const blocksContainer = document.querySelector("#blocks-container");
const changeSizeBtn = document.querySelector("#change-size");
const changeColorBtn = document.querySelector("#change-color");
const changeOpacityBtn = document.querySelector("#change-opacity");

let currentOpacity = 0;
function initialize() {
  changeSizeBtn.onclick = () => {
    changeGrid();
  };
  changeColorBtn.onclick = () => {
    if (changeColorBtn.textContent === "Red") {
      changeColorBtn.textContent = "Random color";
    } else {
      changeColorBtn.textContent = "Red";
    }
  };
  changeOpacityBtn.onclick = () => {
    if (changeOpacityBtn.textContent === "Fully opaque") {
      changeOpacityBtn.textContent = "Progressive";
      currentOpacity = 0;
    } else changeOpacityBtn.textContent = "Fully opaque";
  };
  changeSizeBtn.textContent = "16x16";
  changeColorBtn.textContent = "Random color";
  changeOpacityBtn.textContent = "Fully opaque";

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
          //
          if (changeColorBtn.textContent === "Random color") {
            block.style.backgroundColor = getRandomColor();
          } else if (changeColorBtn.textContent === "Red") {
            block.style.backgroundColor = `rgb(255, 0, 0)`;
          }

          if (changeOpacityBtn.textContent === "Progressive") {
            block.style.opacity = `${currentOpacity}%`;
            if (currentOpacity < 100) currentOpacity += 10;
          }
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
  changeSizeBtn.textContent = `${size}x${size}`;
}

function getRandomColor() {
  function getRandom() {
    return Math.floor(Math.random() * 256);
  }

  return `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
}
