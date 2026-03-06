<script setup lang="ts">
defineProps<{
  label: string
  type?: string
  placeholder?: string
  autocomplete?: string
  modelValue: string
  animationDelay?: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="field" :style="animationDelay ? { animationDelay } : {}">
    <label class="field-label">{{ label }}</label>
    <input
      :type="type ?? 'text'"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :value="modelValue"
      class="field-input"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  animation: fadeUp 0.5s ease both;
}

.field-label {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--muted);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: color 0.3s;
}

.field-input {
  padding: 0.72rem 1rem;
  border-radius: 14px;
  border: 2px solid var(--border);
  background: var(--bg2);
  color: var(--ink);
  font-family: 'Nunito', sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.3s, color 0.3s;
}
.field-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px var(--shadow);
}
.field-input::placeholder { color: var(--muted); opacity: 0.6; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>