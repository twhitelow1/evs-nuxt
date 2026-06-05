<template>
  <Teleport to="body">
    <div class="edit-mode-bar" :class="{ 'is-editing': isEditMode }">
      <span class="edit-mode-bar-label">
        {{ isEditMode ? '✏️ Edit Mode ON' : '✏️ Edit Mode' }}
      </span>
      <button class="edit-mode-btn" @click="toggle">
        {{ isEditMode ? 'Exit Edit Mode' : 'Enable Edit Mode' }}
      </button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { isEditMode, toggle } = useEditMode()
</script>

<style scoped>
.edit-mode-bar {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #2c2c2c;
  color: #fff;
  border-radius: 50px;
  padding: 10px 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  transition: background 0.2s;
}

.edit-mode-bar.is-editing {
  background: #66bfc7;
}

.edit-mode-bar-label {
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
}

.edit-mode-btn {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 20px;
  color: white;
  padding: 5px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s;
}

.edit-mode-btn:hover {
  background: rgba(255,255,255,0.25);
}
</style>
