import Swal from 'sweetalert2'

export const swToast = (title, icon, timer) => {
  // success, error, warning, info, question
  return Swal.fire({
    icon: icon || 'success',
    title: title || 'Salvo com sucesso!',
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: timer || 1500
  })
}
