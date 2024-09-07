
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importation du routeur

// Créer l'application Vue et y intégrer Vue Router
createApp(App)
  .use(router) // Utilisation du routeur dans l'application
  .mount('#app');
