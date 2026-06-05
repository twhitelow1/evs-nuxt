<template>
  <div class="portal-layout">
    <header class="portal-header">
      <div class="portal-header-inner">
        <img src="/img/EVSlogo.webp" alt="Eagle Valley Sitters" class="portal-logo" />
        <span class="portal-title">Owner Portal</span>
      </div>
      <nav class="portal-nav">
        <NuxtLink to="/portal/dashboard">Dashboard</NuxtLink>
        <NuxtLink to="/portal/edit-rates">Edit Rates</NuxtLink>
        <button class="signout-btn" @click="logOut">Sign Out</button>
      </nav>
    </header>
    <main class="portal-main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const { logOut } = useAuth()
</script>

<style scoped>
.portal-layout {
  min-height: 100vh;
  background: #f5f7fa;
}

.portal-header {
  background: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 32px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.portal-header-inner {
  display: flex;
  align-items: center;
  gap: 16px;
}

.portal-logo {
  height: 40px;
}

.portal-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.portal-nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.portal-nav a {
  color: #555;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
}

.portal-nav a:hover,
.portal-nav a.router-link-active {
  color: #66bfc7;
}

.signout-btn {
  background: none;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 6px 16px;
  font-size: 0.9rem;
  color: #666;
  cursor: pointer;
}

.signout-btn:hover {
  background: #f5f5f5;
}

.portal-main {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px;
}
</style>
