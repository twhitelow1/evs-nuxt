import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore'
import { getApps } from 'firebase/app'

const getDb = () => getFirestore(getApps()[0])

export const useContent = () => {
  const contentCache = useState<Record<string, string>>('content.cache', () => ({}))

  const getContent = async (key: string, fallback: string): Promise<string> => {
    if (import.meta.server) return fallback
    if (key in contentCache.value) return contentCache.value[key]
    try {
      const snap = await getDoc(doc(getDb(), 'content', key))
      const value = snap.exists() ? (snap.data().html as string) : fallback
      contentCache.value[key] = value
      return value
    } catch {
      return fallback
    }
  }

  const saveContent = async (key: string, html: string) => {
    const { success, error } = useToast()
    contentCache.value[key] = html
    try {
      await setDoc(doc(getDb(), 'content', key), { html })
      success('Changes saved!')
    } catch (e: any) {
      error('Changes saved locally. They will sync when connection is restored.', e?.message)
    }
  }

  return { getContent, saveContent, contentCache }
}
