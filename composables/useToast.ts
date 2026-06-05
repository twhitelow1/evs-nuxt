export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
  id: number
  type: ToastType
  message: string
  detail?: string  // technical detail for developers
  duration: number
}

let nextId = 0

export const useToast = () => {
  const toasts = useState<Toast[]>('toasts', () => [])

  const add = (type: ToastType, message: string, detail?: string, duration = 4000) => {
    const id = nextId++
    toasts.value.push({ id, type, message, detail, duration })
    setTimeout(() => remove(id), duration)
  }

  const remove = (id: number) => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  const success = (message: string, detail?: string) => add('success', message, detail)
  const error = (message: string, detail?: string) => {
    if (detail) console.error(`[EVS] ${message} — ${detail}`)
    add('error', message, detail, 6000)
  }
  const warning = (message: string, detail?: string) => add('warning', message, detail, 5000)

  return { toasts, success, error, warning, remove }
}
