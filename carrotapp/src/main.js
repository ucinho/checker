// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Make sure to import the router

const app = createApp(App);
app.use(router); // Use the router
app.mount('#app');
