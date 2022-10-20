const progressEl = document.getElementById("progress")
const circleEl = document.querySelectorAll(".circle")
const nextEl = document.getElementById("next")
const prevEl = document.getElementById("prev")

let currentActive = 1

nextEl.addEventListener("click", () => {
    currentActive++;
    if (currentActive > circleEl.length) {
        currentActive = circleEl.length
    }

    update()

})
prevEl.addEventListener("click", () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})
function update() {
    circleEl.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })
    const actives = document.querySelectorAll(".active")
    progressEl.style.width = ((actives.length - 1) / (circleEl.length - 1) * 100 + "%")
    if (currentActive === 1) { prevEl.disabled = true }
    else if (currentActive === circleEl.length) { nextEl.disabled = true }
    else {
        prevEl.disabled = false
        nextEl.disabled = false
    }
}