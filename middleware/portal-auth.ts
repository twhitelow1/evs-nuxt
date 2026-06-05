export default defineNuxtRouteMiddleware(async (to) => {
  if (!to.path.startsWith('/portal') || to.path === '/portal') return

  const { isAllowed, loading } = useAuth()

  // Wait for auth state to resolve on first load
  if (loading.value) {
    await new Promise<void>((resolve) => {
      const stop = watch(loading, (val) => {
        if (!val) { stop(); resolve() }
      })
    })
  }

  if (!isAllowed.value) {
    return navigateTo('/portal')
  }
})
