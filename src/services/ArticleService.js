
// Importation d'Axios, une bibliothèque pour effectuer des requêtes HTTP
import axios from 'axios';

// Définition de l'URL de base pour l'API JSONPlaceholder pour les articles
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default {
  // Méthode pour récupérer tous les articles via une requête GET
  getArticles() {
    return axios.get(API_URL);
  },
  
  // Méthode pour récupérer un article spécifique par son ID via une requête GET
  getArticle(id) {
    return axios.get(`${API_URL}/${id}`);
  },

  // Méthode pour créer un nouvel article via une requête POST
  // 'article' représente les données de l'article à créer
  createArticle(article) {
    return axios.post(API_URL, article);
  },

  // Méthode pour mettre à jour un article existant via une requête PUT
  // 'id' est l'identifiant de l'article à mettre à jour, 'article' contient les nouvelles données
  updateArticle(id, article) {
    return axios.put(`${API_URL}/${id}`, article);
  },

  // Méthode pour supprimer un article via une requête DELETE
  // 'id' est l'identifiant de l'article à supprimer
  deleteArticle(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
