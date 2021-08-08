const btn = document.querySelector(".btn");

function showCont () {
    document.querySelector(".container1").style.display = "none";
    document.querySelector(".container2").style.display = "flex";
}

function init () {
        btn.addEventListener("click", showCont)
}

init();