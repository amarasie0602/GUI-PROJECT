<template>
  <div class="divider">
    <span>or</span>
  </div>
</template>

<style scoped>
.divider {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: fadeUp 0.5s ease 0.35s both;
}
.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1.5px;
  background: var(--border);
  transition: background 0.3s;
}
.divider span {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: color 0.3s;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>