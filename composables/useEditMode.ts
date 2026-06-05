export const useEditMode = () => {
  const isEditMode = useState<boolean>('editMode', () => false)

  const toggle = () => { isEditMode.value = !isEditMode.value }
  const enable = () => { isEditMode.value = true }
  const disable = () => { isEditMode.value = false }

  return { isEditMode, toggle, enable, disable }
}
