// ========================
// Part 2: JavaScript Functions — Scope, Parameters & Return Values
// ========================

// Global variable
let globalCount = 0;

// Function to increment a counter (demonstrates return value)
function incrementCounter(amount) {
    // Local scope variable
    let localCount = globalCount;
    localCount += amount;
    globalCount = localCount; // update global
    return globalCount;
}

// Function to toggle a class on any element by ID (reusable)
function toggleClass(elementId, className) {
    const el = document.getElementById(elementId);
    if (el) el.classList.toggle(className);
}

// ========================
// Part 3: Combining CSS Animations with JS
// ========================

// Animate box on button click
document.getElementById("animateBoxBtn").addEventListener("click", () => {
    const box = document.querySelector(".box");
    box.classList.remove("box-animate"); // reset animation
    void box.offsetWidth; // trigger reflow
    box.classList.add("box-animate"); // start animation
    console.log("Box animated! Current globalCount:", incrementCounter(1));
});

// Flip card on button click
document.getElementById("flipCardBtn").addEventListener("click", () => {
    toggleClass("card", "flip");
});
