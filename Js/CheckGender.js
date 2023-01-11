const hombre = document.getElementById('dot-1');
const mujer = document.getElementById('dot-2');
const ninguno = document.getElementById('dot-3');
const myButton = document.getElementById('btnEnviar');

hombre.addEventListener('click', function() {
    btnEnviar.disabled = false;
});

mujer.addEventListener('click', function() {
    btnEnviar.disabled = false;
});

ninguno.addEventListener('click', function() {
    btnEnviar.disabled = false;
});
