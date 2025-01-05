let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let clearBtn = document.getElementById('clear-btn');

let count = 0;
let digits = [];

function increment() {
    count++;
    countEl.textContent = count
}

function save() {
    digits.push(count);
    saveEl.textContent = `Previous entries: ${digits.join(" - ")}`;
    countEl.textContent = 0;
    count = 0;
}

function clear() {
    count = 0;
    digits = [];
    countEl.textContent = 0;
    saveEl.textContent = 'Previous entries: ';
}

clearBtn.addEventListener('click', () => {
    clear();
})