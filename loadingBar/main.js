const counter = document.querySelector('.counter')
const load = document.getElementById('load')
let number = 0

loading()

function loading() {
    counter.textContent = number + '%'
    load.style.width = number + '%'
    number++
    if (number <= 100) {
        setTimeout(loading, 50);
    }
}
