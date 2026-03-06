<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="auth-panel">
    <div class="panel-inner">

      <div class="floating-pets">
        <span class="pet pet-1">🐶</span>
        <span class="pet pet-2">🐱</span>
        <span class="pet pet-3">🐰</span>
        <span class="pet pet-4">🦜</span>
        <span class="pet pet-5">🐾</span>
      </div>

      <div class="panel-brand">
        <span class="panel-logo">🐾</span>
        <h1 class="panel-title">Pawmie</h1>
        <p class="panel-sub" v-html="subtitle" />
      </div>

      <div class="panel-dots">
        <span v-for="n in 6" :key="n" class="dot" :style="{ '--i': n }" />
      </div>

    </div>
  </div>
</template>

<style scoped>
.auth-panel {
  display: none;
  width: 42%;
  background: var(--panel-gradient);
  position: relative;
  overflow: hidden;
  transition: background 0.3s;
}

@media (min-width: 768px) {
  .auth-panel { display: flex; align-items: center; justify-content: center; }
}

.panel-inner {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  animation: fadeUp 0.7s ease both;
}

.panel-brand { color: #fff; }

.panel-logo {
  font-size: 3rem;
  display: block;
  margin-bottom: 0.5rem;
  animation: bounce 2s ease-in-out infinite;
}

.panel-title {
  font-family: 'Lora', serif;
  font-size: 3rem;
  font-weight: 600;
  font-style: italic;
  color: #fff;
  margin: 0 0 0.75rem;
  text-shadow: 0 2px 12px rgba(0,0,0,0.15);
}

.panel-sub {
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255,255,255,0.88);
  line-height: 1.65;
}

.floating-pets {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.pet {
  position: absolute;
  font-size: 1.8rem;
  animation: floatPet 4s ease-in-out infinite;
  animation-delay: calc(var(--p, 0) * 0.8s);
  opacity: 0.7;
}
.pet-1 { top: 12%; left: 10%; --p: 0; }
.pet-2 { top: 18%; right: 12%; --p: 1; }
.pet-3 { bottom: 22%; left: 8%; --p: 2; }
.pet-4 { bottom: 15%; right: 10%; --p: 3; }
.pet-5 { top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.1; font-size: 8rem; --p: 4; }

.panel-dots {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.4rem;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  animation: pulse 1.8s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes floatPet {
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50%       { transform: translateY(-14px) rotate(5deg); }
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}
@keyframes pulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50%       { opacity: 1; transform: scale(1.3); }
}
</style>