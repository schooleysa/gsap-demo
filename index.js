

const showCont = () => {
    document.getElementsByClassName("container1").style.display = "none";
    document.getElementsByClassName("container2").style.display = "flex";
}

const init = () => {
    console.log("iaiasd")
    document.getElementsByClassName("btn").addEventListener("click", showCont)
}

init();