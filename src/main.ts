import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// restore saved theme (dark / light)
const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark')
}

createApp(App).mount('#app')
