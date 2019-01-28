<template>
  <div>
    <div class="store-block">
  
      <div
        class="store"
        v-if="!renderFavorites"
        @click="addToFavorite(newspage)"
        title="Add to favorites"
      >
        <i class="material-icons store store--false">favorites</i>
      </div>
      <div v-else class="store" @click="deleteFavorite(newspage)" title="Remove from favorites">
        <i class="material-icons store store--true">favorites</i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "newsitem",
  props: ["newspage"],
  computed: {
    ...mapState(["favorites"]),
    renderFavorites() {
    
      return Object.keys(this.favorites).map(id => this.favorites[id].id).indexOf(this.newspage.id) > -1;
    
    }
  },
  methods: {
    ...mapActions(["addToFavorite", "deleteFavorite"])
  }
};
</script>

