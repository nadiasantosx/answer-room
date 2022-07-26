import Modal from './modal.js'

const modal = Modal()

//pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  //adicionar a escuta
  button.addEventListener('click', event => {
    //abre a modal
    modal.open()
  })
})

//abre a modal quando excluir for clicado
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', events => {
    modal.open()
  })
})
