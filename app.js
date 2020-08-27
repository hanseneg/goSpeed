const button = document.getElementById("button")
const visualCount = document.getElementById("visualCount")
let count = localStorage.count || 0;

visualCount.textContent = count
button.addEventListener("click", (e) => {
    count++
    visualCount.textContent = count
})





