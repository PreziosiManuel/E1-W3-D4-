const creaCelle = () => {
  const tab = document.getElementById("tabella");
  for (let i = 1; i < 100; i++) {
    const divCella = document.createElement("div");
    divCella.className = "cella";
    // board.innerHTML += `<div class='cell'>${i + 1}</div>

    const elementoCella = document.createElement("h3");
    elementoCella.innerText = i;

    divCella.appendChild(elementoCella);
    tab.appendChild(divCella);
  }
};
creaCelle();

const bottone = document.getElementById("btn");
bottone.onclick = () => {
  const numberSelect = document.querySelectorAll("h3");
  const numeroExtract = Math.floor(math.random() * cella.length);
  numeroRandom = cella[numeroExtract];
  numeroExtract.className = "green";
};

// const getRandomNum = function (range) {
//     const randIndex = Math.floor(Math.random() * range.length)
//     const random = range.splice(randIndex, 1)[0]
//     return random
