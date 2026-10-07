const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");

    alert(`Thank you, ${name}! Your message has been received.`);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Tab" && event.repeat) {
        event.preventDefault();
    }
});