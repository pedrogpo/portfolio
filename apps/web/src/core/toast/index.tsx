import { toast, ToastPosition } from 'react-toastify'

interface ToastProps {
  message: string
  type: 'success' | 'error' | 'info'
  duration?: number
  position?: ToastPosition
}

export default function Toast({
  message,
  type = 'info',
  duration = 3000,
  position = 'top-right',
}: ToastProps) {
  const toastType = {
    success: toast.success,
    error: toast.error,
    info: toast.info,
  }

  toastType[type](message, {
    position,
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'dark',
  })
}
