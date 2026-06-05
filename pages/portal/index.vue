<template>
  <div class="portal-login">
    <div class="login-card">
      <img src="https://eaglevalleysitters.com/EVSlogo.webp" alt="Eagle Valley Sitters" class="logo" />
      <h2>Owner Portal</h2>
      <p>Sign in with your authorized Google account to manage site content.</p>

      <button class="google-btn" :disabled="signingIn" @click="handleSignIn">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
        {{ signingIn ? 'Signing in...' : 'Sign in with Google' }}
      </button>

      <p v-if="error" class="error-msg">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const { signIn, isAllowed, loading } = useAuth()
const signingIn = ref(false)
const error = ref('')

// If already logged in, go straight to dashboard
watchEffect(() => {
  if (!loading.value && isAllowed.value) {
    navigateTo('/portal/dashboard')
  }
})

const handleSignIn = async () => {
  signingIn.value = true
  error.value = ''
  try {
    await signIn()
    await navigateTo('/portal/dashboard')
  } catch (e: any) {
    error.value = e.message
  } finally {
    signingIn.value = false
  }
}
</script>

<style scoped>
.portal-login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
}

.login-card {
  background: white;
  border-radius: 12px;
  padding: 48px 40px;
  text-align: center;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  max-width: 400px;
  width: 100%;
}

.logo {
  height: 80px;
  margin-bottom: 24px;
}

h2 {
  color: #333;
  margin-bottom: 8px;
  font-size: 1.6rem;
}

p {
  color: #666;
  margin-bottom: 28px;
  font-size: 0.95rem;
}

.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 12px 20px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  font-size: 1rem;
  font-weight: 500;
  color: #444;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
}

.google-btn:hover:not(:disabled) {
  background: #f8f8f8;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.google-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.google-btn img {
  width: 20px;
  height: 20px;
}

.error-msg {
  margin-top: 16px;
  color: #e53935;
  font-size: 0.9rem;
}
</style>
