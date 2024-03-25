import Swal from 'sweetalert2'

const swToast = (title = 'Salvo com sucesso!', icon = 'success', timer = 1500) => {
  Swal.fire({
    icon: icon, // success, error, warning, info, question
    title: title,
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: timer
  })
}

const swBase = (text = 'Olá mundo') => {
  Swal.fire(text)
}

const swSuccess = (title = 'Salvo com sucesso!', icon = 'success') => {
  Swal.fire({
    position: 'top-end',
    icon: icon,
    title: title,
    toast: true,
    showConfirmButton: false,
    timer: 1500
  })
}

const swError = (title, text) => {
  Swal.fire({
    icon: 'error',
    title: title,
    text: text
  })
}

const swConfirm = (title, text, confirmButtonText = 'Tranquilo', cancelButtonText = 'Cancela') => {
  Swal.fire({
    icon: 'warning',
    title: title,
    text: text,
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    cancelButtonText: cancelButtonText
  })
}

const swToastSuccess = (title = 'Sucesso!', text = '') => {
  swToast(title, 'success', text)
}

const swToastError = (title = 'Erro ao salvar!', text = '') => {
  swToast(title, 'error', text)
}

const swToastWarning = (title = 'Atenção!', text = '') => {
  swToast(title, 'warning', text)
}

const swToastInfo = (title = 'Informação!', text = '') => {
  swToast(title, 'info', text)
}

export { swBase, swSuccess, swError, swConfirm, swToast, swToastSuccess, swToastError, swToastWarning, swToastInfo }
