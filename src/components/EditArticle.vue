<template>
    <div>
      <!-- Titre de la page -->
      <h1>Modifier un Article</h1>
  
      <!-- Formulaire pour modifier un article -->
      <form @submit.prevent="updateArticle">
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
  
        <button type="submit" class="btn btn-primary">Sauvegarder les Modifications</button>
        <button @click="cancel" type="button" class="btn btn-secondary">Annuler</button>
      </form>
    </div>
  </template>
  
  <script>
  // Importation du service qui gère les requêtes HTTP pour récupérer et mettre à jour un article
  import ArticleService from '@/services/ArticleService';
  
  export default {
    data() {
      return {
        // Objet pour stocker les détails de l'article à modifier
        article: {
          title: '',
          body: ''
        }
      };
    },
    created() {
      // Récupération de l'ID de l'article depuis les paramètres de la route
      const articleId = this.$route.params.id;
      
      // Appel à la méthode getArticle du service pour récupérer les détails de l'article
      ArticleService.getArticle(articleId)
        .then(response => {
          // Si la requête réussit, on stocke les détails de l'article dans l'objet 'article'
          this.article = response.data;
        })
        .catch(error => {
          // Si une erreur survient lors de la récupération des détails, on affiche une erreur dans la console
          console.error("Erreur lors du chargement des détails de l'article : ", error);
        });
    },
    methods: {
      // Méthode pour envoyer les modifications de l'article à l'API
      updateArticle() {
        // Récupération de l'ID de l'article depuis les paramètres de la route
        const articleId = this.$route.params.id;
        
        // Appel à la méthode updateArticle du service pour mettre à jour l'article
        ArticleService.updateArticle(articleId, this.article)
          .then(() => {
            // Redirection vers la liste des articles après mise à jour réussie
            this.$router.push('/articles');
          })
          .catch(error => {
            // Si une erreur survient lors de la mise à jour, on affiche une erreur dans la console
            console.error("Erreur lors de la mise à jour de l'article : ", error);
          });
      },
  
      // Méthode pour annuler la modification et revenir à la liste des articles
      cancel() {
        this.$router.push('/articles');
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
  
  .btn-secondary {
    background-color: #6c757d;
    border: none;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    margin-left: 10px;
  }
  
  .btn-secondary:hover {
    background-color: #5a6268;
  }
  </style>
  