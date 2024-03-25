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

export { swToast }
