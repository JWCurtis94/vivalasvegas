document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let name = document.getElementById('name').value;

        console.log('Form submitted with name:', name);
    });
});
