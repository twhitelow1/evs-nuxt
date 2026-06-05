<template>
  <Teleport to="body">
    <div class="toast-container">
      <TransitionGroup name="toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="toast"
          :class="`toast--${toast.type}`"
          @click="remove(toast.id)"
        >
          <span class="toast-icon">{{ icons[toast.type] }}</span>
          <div class="toast-body">
            <p class="toast-message">{{ toast.message }}</p>
            <p v-if="toast.detail" class="toast-detail">{{ toast.detail }}</p>
          </div>
          <button class="toast-close" @click.stop="remove(toast.id)">✕</button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { toasts, remove } = useToast()

const icons = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  bottom: 80px;
  right: 24px;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 380px;
  width: calc(100vw - 48px);
}

.toast {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  cursor: pointer;
  background: white;
  border-left: 4px solid #ccc;
}

.toast--success { border-left-color: #43a047; }
.toast--error   { border-left-color: #e53935; }
.toast--warning { border-left-color: #fb8c00; }
.toast--info    { border-left-color: #1e88e5; }

.toast-icon {
  font-size: 1.1rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 1px;
}

.toast--success .toast-icon { color: #43a047; }
.toast--error   .toast-icon { color: #e53935; }
.toast--warning .toast-icon { color: #fb8c00; }
.toast--info    .toast-icon { color: #1e88e5; }

.toast-body { flex: 1; min-width: 0; }

.toast-message {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
}

.toast-detail {
  margin: 4px 0 0;
  font-size: 0.78rem;
  color: #888;
  font-family: monospace;
  word-break: break-word;
  line-height: 1.4;
}

.toast-close {
  background: none;
  border: none;
  color: #bbb;
  font-size: 0.85rem;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  line-height: 1;
}
.toast-close:hover { color: #888; }

/* Transition animations */
.toast-enter-active { transition: all 0.25s ease; }
.toast-leave-active { transition: all 0.2s ease; }
.toast-enter-from   { opacity: 0; transform: translateX(40px); }
.toast-leave-to     { opacity: 0; transform: translateX(40px); }
</style>
