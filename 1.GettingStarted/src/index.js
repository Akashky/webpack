import _ from "lodash";
document.getElementById("button1").addEventListener("click", buttionClick);
function buttionClick() {
    const el = document.createElement('header');
    el.innerHTML = 'Button Clicked';

    const listItem = ["Apple", "Orange", "Banana", "Kiwi"];
    const ul = document.getElementById("list");
    _.forEach(listItem, function(item) {
        const tempEl = document.createElement('li');
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    })
}