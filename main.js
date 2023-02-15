const form = document.querySelector('form');
const accountInput = form.querySelector('input[type="number"]:first-of-type');
const valueInput = form.querySelector('input[type="number"]:last-of-type');

form.addEventListener('submit', function(event) {
    if (parseInt(valueInput.value) <= parseInt(accountInput.value)) {
    event.preventDefault();
    alert('O segundo valor precisa ser maior que o primeiro.');
    } else {
    alert('Formulário enviado com sucesso!');
    }
});
