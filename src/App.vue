<template>
  <div id="app">
    <nav>
      <!-- router-link est utilisé pour créer des liens vers d'autres routes -->
      <router-link to="/articles">Articles</router-link> <br>
      <router-link to="/articles/add">Ajouter article</router-link>
    </nav>
    
    <!-- router-view est utilisé pour afficher le composant correspondant à la route actuelle -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
