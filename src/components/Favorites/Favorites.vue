<template>
  <div class="container">
    <div v-for="(favorites, key) in favorites" :key="key" class="newspage--container">
      <div class="newspage__block">
        <h2>
          <router-link
            class="newspage__title"
            :to="{path: '/story/' + favorites.id}"
          >{{ favorites.title }}</router-link>
        </h2>
        <p>
          <a class="newspage__link" :href="favorites.url">{{ favorites.url }}</a>
        </p>
        <p>Comments: {{ favorites.comments_count }}</p>
        <p>Score: {{ favorites.points }}</p>
      </div>
      <div class="store-block">
        <div class="store store--false" @click="deleteFavorite(favorites)">
          <i class="material-icons store">clear</i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapState(["favorites"])
  },
  methods: {
    ...mapActions(["addToFavorite", "deleteFavorite"])
  }
};
</script>
<style>
</style>


