const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('https://sheet.best/api/sheets/1478aa5e-74b2-48b7-8ee7-d393fc078987', {
        method: 'POST', 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Nombre": form.nombre.value,
                "Email": form.email.value,
            })
    });
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    openModal.checked = false
})

/////modal

const openModal = document.querySelector('.input-checkbox-sale');
const modal = document.querySelector('.modal');
const closeModal =  document.querySelector('.modal__close');

openModal.addEventListener('change', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
});