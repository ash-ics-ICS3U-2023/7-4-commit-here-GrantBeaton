/**
 * This file will get loaded by index.html
 */
console.log("Hello World!");
console.log(document.title);

let clicks = 0;
document.getElementById("add_click_btn").addEventListener("click", addclicks);

function addclicks() {
    clicks++;
    document.getElementById("clicks").textContent ++ ;
    console.log("The button was clicked!");
}

document.getElementById("sub_click_btn").addEventListener("click", subclicks);

function subclicks() {
    clicks--;
    document.getElementById("clicks").textContent -- ;
    console.log("The button was clicked!");
}

document.getElementById("reset_click_btn").addEventListener("click", resetclicks);

function resetclicks() {
    clicks = 0;
    document.getElementById("clicks").textContent = 0 ;
    console.log("The button was clicked!");
}
