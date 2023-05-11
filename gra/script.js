let x = 0;
let y = 300;
let x1 = 400
let y1 = 300;
let count = 1;
const obrazek = document.querySelector("#obrazek");

document.onkeydown = (e) => {
  e.preventDefault();

  if (e.key == "ArrowUp") {
    y -= 10;
    if (y < 0) y = 0;
    obrazek.style.top = `${y}px`;
    document.querySelector("#obrazek").style.transform = `rotate(${-0.25}turn)`;
  }
  if (e.key == "ArrowDown") {
    y += 10;
    if (y >= 550) y = 550;
    obrazek.style.top = `${y}px`;
    document.querySelector("#obrazek").style.transform = `rotate(${-0.75}turn)`;
  }
  if (e.key == "ArrowLeft") {
    x -= 10;
    if (x < 0) x = 0;
    obrazek.style.left = `${x}px`;
    document.querySelector("#obrazek").style.transform = `rotate(${-0.50}turn)`;
  }
  if (e.key == "ArrowRight") {
    x += 10;
    if (x >= 750) x = 750;
    obrazek.style.left = `${x}px`;
    document.querySelector("#obrazek").style.transform = `rotate(${-0.0}turn)`;
  }
  if (x >= x1 - 40 && x <= x1 + 40 && y >= y1 - 40 && y <= y1 + 40) {
    console.log("mam cie ");
    x1 = Math.floor(Math.random() * 75 + 0.1) * 10;
    y1 = Math.floor(Math.random() * 55 + 0.1) * 10;
    document.querySelector("#szukaj").style.left = `${x1}px`;
    document.querySelector("#szukaj").style.top = `${y1}px`;
    document.querySelector("#stan").innerHTML = `Ilość trafień: ${count}`;
    count++;
  }


  document.querySelector("#wynik").innerHTML = `Pozycja x:${x} y:${y}`;



}
