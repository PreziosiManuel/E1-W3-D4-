const creaCelle = () => {
  const tab = document.getElementById("tabella");
  for (let i = 1; i < 100; i++) {
    const divCella = document.createElement("div");
    divCella.className = "cella";

    const elementoCella = document.createElement("h3");
    elementoCella.innerText = i;

    divCella.appendChild(elementoCella);
    tab.appendChild(divCella);
  }
};

creaCelle();

const bottone = document.getElementById("btn");
bottone.onclick = () => {
  const celle = document.querySelectorAll(".cella");
  const randomNum = Math.floor(Math.random() * celle.length);
  const randomCell = celle[randomNum];
  randomCell.style.backgroundColor = "green";
  console.log(randomCell.innerText);
};
