const abrir_modal = document.querySelector("#abrir-modal")
const modal = document.querySelector("dialog")
const button_close = document.querySelector("#close")

abrir_modal.onclick = function() {
    modal.showModal()
}

button_close.onclick = function() {
    modal.close()
}