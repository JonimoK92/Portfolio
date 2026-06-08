const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(section => {
    observer.observe(section);
});

const dropdown = document.querySelector(".cv-dropdown");

dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

// fermer si clic ailleurs
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
    }
});