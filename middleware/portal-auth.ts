export default defineNuxtRouteMiddleware(async (_to) => {
  // Auth check disabled until Firebase Auth is fully configured
  // TODO: re-enable when Google Auth is set up in Firebase console
  // const { isAllowed, loading } = useAuth()
  // if (loading.value) {
  //   await new Promise<void>((resolve) => {
  //     const stop = watch(loading, (val) => { if (!val) { stop(); resolve() } })
  //   })
  // }
  // if (!isAllowed.value) return navigateTo('/portal')
})
