// Local store for editable content — persists across navigation via localStorage.
// TODO: swap getContent/saveContent for Firestore reads/writes once Firebase is enabled.

const STORAGE_KEY = 'evs_content'

const loadCache = (): Record<string, string> => {
  if (import.meta.server) return {}
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

export const useContent = () => {
  const contentCache = useState<Record<string, string>>('content.cache', () => loadCache())

  const getContent = (key: string, fallback: string): string => {
    return contentCache.value[key] ?? fallback
    // TODO: replace with Firestore getDoc when Firebase is enabled
  }

  const saveContent = (key: string, html: string) => {
    contentCache.value[key] = html
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(contentCache.value))
    }
    // TODO: replace with Firestore setDoc when Firebase is enabled
  }

  return { getContent, saveContent, contentCache }
}
