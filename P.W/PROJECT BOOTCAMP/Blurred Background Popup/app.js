const containerEl = document.querySelector(".container");

const btnEl = document.querySelector(".btn");

const popup_containerEl = document.querySelector(".popup-container");

const popup_btn = document.querySelector(".popup-btn");

const close_iconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () =>{
    containerEl.classList.add("active");
    popup_containerEl.classList.remove("active");
});

close_iconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popup_containerEl.classList.add("active");
});

// popup_btn.addEventListener("click", () => {
//     popup_containerEl.classList.add("active");
//     containerEl.classList.remove("active");
// });