const bg_image = document.getElementById("bg-img");

window.addEventListener("scroll", () => {
    updateImage()
})

function updateImage() {
    bg_image.style.opacity = 1 - window.pageYOffset / 800;
    bg_image.style.backgroundSize = 160 - window.pageYOffset / 12 + "%"
}