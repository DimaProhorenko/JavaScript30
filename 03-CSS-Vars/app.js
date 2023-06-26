const img = document.querySelector(".app__img");
const inputs = document.querySelectorAll(".form__input");

function handleUpdate() {
    const suffix = this.dataset.spacing || '';
    const target = this.name;
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach(input => {
    input.addEventListener('input', handleUpdate);
});