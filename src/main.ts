import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// restore saved theme (dark / light)
const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark')
}

createApp(App).use(router).mount('#app')
