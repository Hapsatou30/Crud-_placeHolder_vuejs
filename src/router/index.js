

// Importation des fonctions nécessaires pour créer un routeur dans Vue 3
import { createRouter, createWebHistory } from 'vue-router';

// Importation des composants utilisés dans les routes
import ArticlesList from '@/components/ArticlesList.vue';
import ArticleDetail from '@/components/ArticleDetail.vue';
import ArticleForm from '@/components/ArticleForm.vue';
import EditArticle from '@/components/EditArticle.vue';


// Définition des routes de l'application
const routes = [
  // Route pour la liste des articles, associée au composant ArticlesList
  { path: '/articles', component: ArticlesList },

  // Route pour afficher les détails d'un article spécifique (avec un paramètre dynamique :id)
  { path: '/articles/:id', component: ArticleDetail },

  // Route par défaut, renvoyant vers la liste des articles
  { path: '', redirect: '/articles' },

  //Route pour ajouter un article
  { path: '/articles/add', component: ArticleForm },

  //Route pour modifier un article 
  { path: '/edit-article/:id', component: EditArticle }
];

// Création du routeur avec l'historique de navigation basé sur le mode HTML5 (sans le # dans les URL)
const router = createRouter({
  // Utilisation de createWebHistory pour activer le mode "historique" dans le navigateur
  history: createWebHistory(),

  // Assignation des routes définies précédemment
  routes
});

// Exportation du routeur pour qu'il puisse être utilisé dans l'application Vue
export default router;
