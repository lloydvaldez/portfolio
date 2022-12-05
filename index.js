// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

// select modal-btn, modal-overlay, close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

let modals = document.querySelector(".modal-overlay")
let modalBtns = Array.from([...document.querySelectorAll(".modal-btn")])
let closeBtns = document.querySelector(".close-btn")

for (let i = 0; i < modalBtns.length; i++) {
    modalBtns[i].addEventListener("click", function () {
        modals[i].classList.add("open-modal")
    })
}

for (let i = 0; closeBtns.length; i++) {
    closeBtns[i].onClick = () => {
        modals[i].classList.remove("open-modal")
    }
}