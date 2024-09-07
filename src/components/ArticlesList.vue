<template>
    <div>
      <!-- Titre de la page -->
      <h1>Liste des Articles</h1>
  
      <!-- Affichage de la liste des articles si la liste n'est pas vide -->
      <ul v-if="articles.length">
        <!-- Utilisation de v-for pour boucler sur chaque article -->
        <!-- :key est utilisé pour aider Vue à suivre chaque élément dans la liste -->
        <li v-for="article in articles" :key="article.id" class="article-item">
          <!-- Affichage du titre de l'article avec un lien vers ses détails -->
          <router-link :to="`/articles/${article.id}`">{{ article.title }}</router-link>
  
          <!-- Bouton pour modifier l'article -->
          <button @click="editArticle(article.id)" class="btn btn-secondary">Modifier</button>
  
          <!-- Bouton pour supprimer l'article -->
          <button @click="deleteArticle(article.id)" class="btn btn-danger">Supprimer</button>
        </li>
      </ul>
  
      <!-- Si la liste des articles est vide, afficher un message de chargement -->
      <p v-else>Chargement des articles...</p>
    </div>
  </template>
  
  <script>
  // Importation du service qui gère les requêtes HTTP pour récupérer, modifier et supprimer les articles
  import ArticleService from '@/services/ArticleService';
  
  export default {
    // Définition de la structure des données du composant
    data() {
      return {
        // Tableau pour stocker les articles récupérés de l'API
        articles: []
      };
    },
  
    // Le hook 'created' est exécuté immédiatement après la création du composant
    created() {
      // Appel à la méthode getArticles du service pour récupérer les articles depuis l'API
      ArticleService.getArticles()
        .then(response => {
          // Si la requête réussit, on stocke les articles dans le tableau 'articles'
          this.articles = response.data;
        })
        .catch(error => {
          // Si une erreur survient lors de la récupération des articles, on affiche une erreur dans la console
          console.error("Erreur lors du chargement des articles : ", error);
        });
    },
  
    methods: {
      // Méthode pour rediriger vers la page de modification d'un article
      editArticle(id) {
        this.$router.push(`/edit-article/${id}`);
      },
  
      // Méthode pour supprimer un article
      deleteArticle(id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
          ArticleService.deleteArticle(id)
            .then(() => {
              // Si la suppression réussit, on met à jour la liste des articles
              this.articles = this.articles.filter(article => article.id !== id);
            })
            .catch(error => {
              // Si une erreur survient lors de la suppression, on affiche une erreur dans la console
              console.error("Erreur lors de la suppression de l'article : ", error);
            });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques au composant */
  h1 {
    color: #4862C4;
  }
  
  .article-item {
    margin-bottom: 10px;
  }
  
  .btn {
    margin-left: 10px;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    border: none;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .btn-secondary:hover {
    background-color: #5a6268;
  }
  
  .btn-danger {
    background-color: #dc3545;
    border: none;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .btn-danger:hover {
    background-color: #c82333;
  }
  </style>
  