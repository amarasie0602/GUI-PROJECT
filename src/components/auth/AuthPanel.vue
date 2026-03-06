<script setup lang="ts">
defineProps<{
  subtitle: string
}>()

const animals = [
  {
    src: 'https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif',
    alt: 'cute dog',
    class: 'pet-1',
  },
  {
    src: 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif',
    alt: 'cute cat',
    class: 'pet-2',
  },
  {
    src: 'https://media.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif',
    alt: 'cute rabbit',
    class: 'pet-3',
  },
  {
    src: 'https://media.giphy.com/media/H4uE6w9G1uK4M/giphy.gif',
    alt: 'cute hamster',
    class: 'pet-4',
  },
]
</script>

<template>
  <div class="auth-panel">

    <img
      v-for="animal in animals"
      :key="animal.alt"
      :src="animal.src"
      :alt="animal.alt"
      :class="['pet', animal.class]"
    />

    <!-- Centered brand block -->
    <div class="panel-inner">
      <img
        src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f43e.svg"
        alt="paw"
        class="panel-logo"
      />
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

/* Corner animals */
.pet {
  position: absolute;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid rgba(255,255,255,0.3);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  pointer-events: none;
  animation: floatPet 4s ease-in-out infinite;
}
.pet-1 { top: 6%;    left: 6%;   animation-delay: 0s;   }
.pet-2 { top: 6%;    right: 6%;  animation-delay: 1s;   }
.pet-3 { bottom: 9%; left: 6%;   animation-delay: 2s;   }
.pet-4 { bottom: 9%; right: 6%;  animation-delay: 3s;   }

/* Center content */
.panel-inner {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  animation: fadeUp 0.7s ease both;
}

.panel-logo {
  width: 60px;
  height: 60px;
  display: block;
  margin: 0 auto 0.75rem;
  animation: bounce 2.5s ease-in-out infinite;
  filter: drop-shadow(0 3px 8px rgba(0,0,0,0.2));
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
  bottom: 2rem;
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

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes floatPet {
  0%, 100% { transform: translateY(0) scale(1); }
  50%       { transform: translateY(-12px) scale(1.05); }
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