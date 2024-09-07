<template>
    <div>
      <!-- Titre de la page -->
      <h1>Ajouter un Article</h1>
  
      <!-- Formulaire pour ajouter un article -->
      <form @submit.prevent="addArticle">
        <div class="form-group">
          <label for="title">Titre</label>
          <input
            type="text"
            id="title"
            v-model="article.title"
            required
            class="form-control"
          />
        </div>
  
        <div class="form-group">
          <label for="body">Contenu</label>
          <textarea
            id="body"
            v-model="article.body"
            required
            class="form-control"
          ></textarea>
        </div>
  
        <button type="submit" class="btn btn-primary">Ajouter l'Article</button>
      </form>
    </div>
  </template>
  
  <script>
  // Importation du service qui gère les requêtes HTTP pour ajouter un article
  import ArticleService from '@/services/ArticleService';
  
  export default {
    data() {
      return {
        // Objet pour stocker les données de l'article à ajouter
        article: {
          title: '',
          body: ''
        }
      };
    },
    methods: {
      // Méthode pour ajouter un nouvel article
      addArticle() {
        // Appel à la méthode createArticle du service pour ajouter l'article
        ArticleService.createArticle(this.article)
          .then(response => {
            // Redirection vers la liste des articles après ajout réussi
            this.$router.push('/articles');
          })
          .catch(error => {
            // Affichage d'une erreur dans la console en cas de problème
            console.error("Erreur lors de l'ajout de l'article : ", error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques au composant */
  h1 {
    color: #4862C4;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-control {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
  }
  
  .btn-primary {
    background-color: #4862C4;
    border: none;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .btn-primary:hover {
    background-color: #365899;
  }
  </style>
  