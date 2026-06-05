import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth'
import { getApps } from 'firebase/app'

const ALLOWED_EMAILS = [
  'todd@dub-low.consulting',
  'cat@eaglevalleysitters.com',
]

export const useAuth = () => {
  const user = useState<User | null>('auth.user', () => null)
  const loading = useState<boolean>('auth.loading', () => true)
  const isAllowed = computed(() => !!user.value && ALLOWED_EMAILS.includes(user.value.email ?? ''))

  const getFirebaseAuth = () => {
    const apps = getApps()
    if (!apps.length) throw new Error('Firebase not initialized')
    return getAuth(apps[0])
  }

  const initialized = useState<boolean>('auth.initialized', () => false)

  const init = () => {
    if (import.meta.server || initialized.value) return
    initialized.value = true
    try {
      const auth = getFirebaseAuth()
      onAuthStateChanged(auth, (u) => {
        user.value = u
        loading.value = false
      })
    } catch (e) {
      loading.value = false
    }
  }

  const signIn = async () => {
    const auth = getFirebaseAuth()
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    if (!ALLOWED_EMAILS.includes(result.user.email ?? '')) {
      await signOut(auth)
      throw new Error('Your Google account is not authorized to access this portal.')
    }
  }

  const logOut = async () => {
    const auth = getFirebaseAuth()
    await signOut(auth)
    await navigateTo('/portal')
  }

  return { user, isAllowed, loading, init, signIn, logOut }
}
