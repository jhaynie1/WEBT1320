document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < 50; i++) {
        let bead = document.createElement("div");
        bead.className = "beads";
        bead.style.left = `${Math.random() * 100}vw`;
        bead.style.animationDuration = `${2 + Math.random() * 3}s`;
        document.body.appendChild(bead);
    }
});
