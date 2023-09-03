const huHands = document.querySelectorAll('.human');
const roHands = document.querySelectorAll('.robot');



for (let i = 0; i <= huHands.length - 1; i++) {

    huHands[i].addEventListener('click', () => {
        const random = Math.floor(Math.random() * 10 / 4);
        hiddenSelect(i);
        console.log(random);
        roHands[random].classList.remove('d-none');
        gameLogic(i, random)
    })
}

function hiddenSelect(i) {
    for (let j = 0; j <= huHands.length - 1; j++) {
        if (j !== i) {
            huHands[j].classList.add('d-none');
        }
    }
}

let humanPoint = document.querySelector('#humanPoint');
let robotPoint = document.querySelector('#robotPoint');
let output = document.querySelector('#output');

function gameLogic(human, cpu) {
    if (human != cpu) {
        if (human == 0) {
            if (cpu == 1) {
                output.innerHTML = "You WON ."
                output.style.color = "green"
                humanPoint.textContent = Number(humanPoint.innerHTML) + 1

            } else {
                output.innerHTML = "Robo Player WIN !"
                output.style.color = "red"
                robotPoint.textContent = Number(robotPoint.innerHTML) + 1
            }
        }
        if (human == 1) {
            if (cpu == 2) {
                output.innerHTML = "You WON ."
                output.style.color = "green"
                humanPoint.textContent = Number(humanPoint.innerHTML) + 1
            } else {
                output.innerHTML = "Robo Player WIN !"
                output.style.color = "red"
                robotPoint.textContent = Number(robotPoint.innerHTML) + 1
            }
        }
        if (human == 2) {
            if (cpu == 1) {
                output.innerHTML = "Robo Player WIN !"
                output.style.color = "red"
                robotPoint.textContent = Number(robotPoint.innerHTML) + 1
            } else {
                output.innerHTML = "You WON ."
                output.style.color = "green"
                humanPoint.textContent = Number(humanPoint.innerHTML) + 1
            }
        }

    } else {
        output.innerHTML = "Draw ! Try again Hommie ."
        output.style.color = "blue"
    }
}

function refresh() {
    for (let i = 0; i <= huHands.length - 1; i++) {
        huHands[i].classList.remove('d-none');
        roHands[i].classList.add('d-none');
        output.innerHTML = "Fight again"
        output.style.color = "grey"
    }
}

let btn = document.querySelector('#btn').addEventListener('click', () => {
    refresh()
})

document.addEventListener("keyup", (e) => {
    if (e.key == 'r') {
        refresh();
    }
})

