function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}

const toggleButton = document.querySelector('#btn-mobile')
const navbarLinks = document.querySelector('.menu')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

