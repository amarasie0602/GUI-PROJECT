<script setup lang="ts">
defineProps<{
  subtitle: string
}>()
</script>

<template>
  <div class="auth-panel">

    <!-- Floating pets — absolutely positioned, won't interfere with text -->
    <span class="pet pet-1">🐶</span>
    <span class="pet pet-2">🐱</span>
    <span class="pet pet-3">🐰</span>
    <span class="pet pet-4">🦜</span>

    <!-- Centered brand block -->
    <div class="panel-inner">
      <span class="panel-logo">🐾</span>
      <h1 class="panel-title">Pawmie</h1>
      <p class="panel-sub" v-html="subtitle" />
    </div>

    <!-- Bottom dots -->
    <div class="panel-dots">
      <span v-for="n in 6" :key="n" class="dot" :style="{ '--i': n }" />
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
  .auth-panel {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* Floating pets — corners, never overlap center */
.pet {
  position: absolute;
  font-size: 2rem;
  animation: floatPet 4s ease-in-out infinite;
  opacity: 0.85;
  pointer-events: none;
}
.pet-1 { top: 8%;  left: 8%;  animation-delay: 0s; }
.pet-2 { top: 8%;  right: 8%; animation-delay: 0.8s; }
.pet-3 { bottom: 12%; left: 8%;  animation-delay: 1.6s; }
.pet-4 { bottom: 12%; right: 8%; animation-delay: 2.4s; }

/* Centered content */
.panel-inner {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  animation: fadeUp 0.7s ease both;
}

.panel-logo {
  font-size: 3rem;
  display: block;
  margin-bottom: 0.5rem;
  animation: bounce 2.5s ease-in-out infinite;
}

.panel-title {
  font-family: 'Lora', serif;
  font-size: 3rem;
  font-weight: 600;
  font-style: italic;
  color: #fff;
  margin: 0 0 0.85rem;
  text-shadow: 0 2px 12px rgba(0,0,0,0.2);
}

.panel-sub {
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255,255,255,0.88);
  line-height: 1.7;
  margin: 0;
}

/* Bottom dots */
.panel-dots {
  position: absolute;
  bottom: 14rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.4rem;
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255,255,255,0.45);
  animation: pulse 1.8s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.18s);
}

/* Animations */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes floatPet {
  0%, 100% { transform: translateY(0) rotate(-4deg); }
  50%       { transform: translateY(-12px) rotate(4deg); }
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}
@keyframes pulse {
  0%, 100% { opacity: 0.35; transform: scale(1); }
  50%       { opacity: 1;    transform: scale(1.35); }
}
</style>