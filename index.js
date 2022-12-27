const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el")

let count = 0;

function increment(){
    count += 1;
    countEl.innerHTML = count
}

function save(){
    saveEl.innerHTML += count + " - "
    count = 0;
    countEl.innerHTML = count
}