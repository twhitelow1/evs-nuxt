import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth'

const ALLOWED_EMAILS = [
  'todd@dub-low.consulting',
  'cat@eaglevalleysitters.com',
]

export const useAuth = () => {
  const { $auth } = useNuxtApp()
  const user = useState<User | null>('auth.user', () => null)
  const isAllowed = computed(() => {
    return !!user.value && ALLOWED_EMAILS.includes(user.value.email ?? '')
  })
  const loading = useState<boolean>('auth.loading', () => true)

  const init = () => {
    onAuthStateChanged($auth, (u) => {
      user.value = u
      loading.value = false
    })
  }

  const signIn = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup($auth, provider)
    if (!ALLOWED_EMAILS.includes(result.user.email ?? '')) {
      await signOut($auth)
      throw new Error('Your Google account is not authorized to access this portal.')
    }
  }

  const logOut = async () => {
    await signOut($auth)
    await navigateTo('/portal')
  }

  return { user, isAllowed, loading, init, signIn, logOut }
}
