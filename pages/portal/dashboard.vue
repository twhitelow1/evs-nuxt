<template>
  <div>
    <h1>Welcome back, {{ user?.displayName?.split(' ')[0] }}</h1>
    <p class="subtitle">What would you like to manage today?</p>

    <div class="dashboard-cards">
      <NuxtLink to="/portal/edit-rates" class="dash-card">
        <div class="dash-card-icon">💰</div>
        <h3>Edit Rates</h3>
        <p>Update babysitting, pet sitting, and booking fee pricing.</p>
      </NuxtLink>

      <div class="dash-card dash-card-soon">
        <div class="dash-card-icon">✏️</div>
        <h3>Edit Content</h3>
        <p>Coming in Phase 2 — edit text and images across the site.</p>
        <span class="badge">Coming Soon</span>
      </div>

      <div class="dash-card dash-card-soon">
        <div class="dash-card-icon">🖼️</div>
        <h3>Manage Slider</h3>
        <p>Coming in Phase 3 — add and reorder homepage slides.</p>
        <span class="badge">Coming Soon</span>
      </div>

      <div class="dash-card dash-card-soon">
        <div class="dash-card-icon">⭐</div>
        <h3>Manage Reviews</h3>
        <p>Coming in Phase 4 — add and feature customer reviews.</p>
        <span class="badge">Coming Soon</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'portal', middleware: 'portal-auth' })
const { user } = useAuth()
</script>

<style scoped>
h1 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 6px;
}

.subtitle {
  color: #888;
  margin-bottom: 36px;
}

.dashboard-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.dash-card {
  background: white;
  border-radius: 12px;
  padding: 28px 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s, box-shadow 0.15s;
  position: relative;
  display: block;
}

.dash-card:not(.dash-card-soon):hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}

.dash-card-soon {
  opacity: 0.55;
  cursor: default;
}

.dash-card-icon {
  font-size: 2rem;
  margin-bottom: 14px;
}

.dash-card h3 {
  font-size: 1.05rem;
  color: #333;
  margin-bottom: 8px;
}

.dash-card p {
  font-size: 0.88rem;
  color: #888;
  line-height: 1.5;
}

.badge {
  display: inline-block;
  margin-top: 12px;
  background: #eee;
  color: #888;
  font-size: 0.75rem;
  padding: 3px 10px;
  border-radius: 20px;
}
</style>
