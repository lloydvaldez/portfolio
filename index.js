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

const btns = document.querySelectorAll("[data-target]")
const closeBtn = document.querySelectorAll(".close-btn")
const overlay = document.getElementById("overlay")


btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active")
        overlay.classList.add("active")
    })
})

closeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal")
        modal.classList.remove("active")
        overlay.classList.remove("active")
    })
})

window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal")
        modals.forEach((modal) => modal.classList.remove("active"))
        overlay.classList.remove("active")
    }
}