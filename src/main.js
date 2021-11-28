/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import 'tailwindcss/tailwind.css';
import App from './App.vue';
import store from './store';

createApp(App).use(store).mount('#app');
