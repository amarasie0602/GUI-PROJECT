<script setup lang="ts">
defineProps<{
  label?: string
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button type="button" class="btn-google" @click="$emit('click')">
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google"
      class="google-icon"
    />
    {{ label ?? 'Continue with Google' }}
  </button>
</template>

<style scoped>
.btn-google {
  width: 100%;
  padding: 0.75rem;
  border-radius: 14px;
  border: 2px solid var(--border);
  background: var(--bg2);
  color: var(--ink);
  font-family: 'Nunito', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.3s, color 0.3s;
  animation: fadeUp 0.5s ease 0.4s both;
}
.btn-google:hover {
  border-color: var(--accent);
  box-shadow: 0 3px 14px var(--shadow);
}
.google-icon { width: 18px; height: 18px; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>