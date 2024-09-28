const body = document.body;

const box1 = document.createElement(`div`)
const box2 = document.createElement(`div`)
const box3 = document.createElement(`div`)

const boxes = [box1,box2,box3]
for (let box of boxes) {
    box.className = `box b`;
}
for (let i = 0; i < 363; i++) {
    for (let box of boxes) {
        let g = document.createElement(`div`);
        g.className = `g`
        g.style.height = `${18-getRandomInt(4)}vh`;
        box.appendChild(g)
    }
}

boxes.map((box) => {
    body.appendChild(box)
})

const cars = document.createElement(`div`);
cars.className = `cars`
const carsImg = document.createElement(`img`)
carsImg.src = `cars.jpeg`
cars.appendChild(carsImg)
body.appendChild(cars)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

alert(`ทองแทร่ ๙๙.๙๙%`);