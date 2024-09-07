<template>
    <div>
      <!-- Titre de la page -->
      <h1>Détails de l'article</h1>
  
      <!-- Bouton de retour vers la liste des articles -->
      <button @click="goBack" class="back-button">Retour à la liste</button>
  
      <!-- Affichage des détails de l'article si disponible -->
      <div v-if="article">
        <h2>{{ article.title }}</h2>
        <p>{{ article.body }}</p>
      </div>
  
      <!-- Message de chargement si l'article est encore en cours de récupération -->
      <p v-else>Chargement de l'article...</p>
    </div>
  </template>
  
  <script>
  // Importation du service qui gère les requêtes HTTP pour récupérer les articles
  import ArticleService from '@/services/ArticleService';
  
  export default {
    data() {
      return {
        // Variable pour stocker les détails de l'article
        article: null
      };
    },
    
    created() {
      // Récupération de l'ID de l'article depuis l'URL
      const articleId = this.$route.params.id;
  
      // Appel à la méthode getArticle du service pour récupérer les détails de l'article
      ArticleService.getArticle(articleId)
        .then(response => {
          // Stockage des détails de l'article dans la variable article
          this.article = response.data;
        })
        .catch(error => {
          // Affichage d'une erreur dans la console en cas de problème
          console.error("Erreur lors du chargement de l'article : ", error);
        });
    },
  
    methods: {
      // Méthode pour revenir à la page précédente
      goBack() {
        this.$router.back();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques au composant */
  h1 {
    color: #4862C4;
  }
  
  h2 {
    margin-top: 0;
  }
  
  .back-button {
    background-color: #4862C4;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  
  .back-button:hover {
    background-color: #365899;
  }
  </style>
  