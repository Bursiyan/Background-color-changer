const button = document.getElementById("btn");
const color = document.querySelector(".color")

// const colors = ["#FF5733", "#F9FF33", "rgb(55, 45, 67)", "green", "blue", "pink"]

const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    // button.addEventListener("click", () => {
    //     let colorsName = colors[getRandomNumber()];
    //     document.body.style.backgroundColor = colorsName;
    //     color.textContent = colorsName;

// });

// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length)
// }

button.addEventListener("click", () => {
    let colorsName = generateHex();
    document.body.style.backgroundColor = colorsName;
    color.textContent = colorsName;

});

function generateHex() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    return hexColor
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}