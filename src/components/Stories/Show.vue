<template>
  <div>
    <template v-if="newspages.length > 0">
      <div class="container btn--container">
        <button class="btn__page" @click="firstPage()" :disabled="page <= 1">&laquo;</button>
        <button class="btn__page" @click="last()" :disabled="page <= 1">&lt;</button>
        <button class="btn__page btn--num" :disabled="page <= maxPage">{{page}}</button>
        <button class="btn__page" @click="inc()" :disabled="page >= maxPage">&gt;</button>
        <button class="btn__page" @click="lastPage()" :disabled="page >= maxPage">&raquo;</button>
      </div>
      <div v-for="(newspage, key) in renderNews" :key="key" class="container">
        <div class="newspage--container">
          <newslist :newspage="newspage"></newslist>

          <newsitem :newspage="newspage"></newsitem>
        </div>
      </div>

      <div class="container btn--container">
        <button class="btn__page" @click="firstPage()" :disabled="page >= maxPage+1">&laquo;</button>
        <button class="btn__page" @click="last()" :disabled="page <= 1">&lt;</button>
        <button class="btn__page btn--num" :disabled="page <= maxPage">{{page}}</button>
        <button class="btn__page" @click="inc()" :disabled="page >= maxPage">&gt;</button>
        <button class="btn__page" @click="lastPage()" :disabled="page >= maxPage">&raquo;</button>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import bus from "@/utils/bus";
import newslist from "@/components/newslist/newslist.vue";
import newsitem from "@/components/newslist/newsitem.vue";

import { mapActions, mapState } from "vuex";
export default {
  name: "Show",
  components: {
    newslist,
    newsitem
  },
  data: function() {
    return {
      err: "",
      newspages: [],
      page: 1,
      maxPage: 2,
      search: ""
    };
  },
  created: async function() {
    bus.$on("search", q => (this.search = q));
    await this.loadData();
  },
  computed: {
    renderNews() {
      return this.newspages.filter(
        n => n.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    }
  },
  methods: {
    ...mapActions(["addToFavorite", "deleteFavorite"]),

    async firstPage() {
      if (this.page < this.maxPage + 1) {
        this.page = 1;
        this.search = "";
        await this.loadData();
      }
    },
    async lastPage() {
      if (this.page < this.maxPage) {
        this.page = this.maxPage;
        this.search = "";
        await this.loadData();
      }
    },
    async inc() {
      if (this.page < this.maxPage) {
        this.page = this.page + 1;
        this.search = "";
        await this.loadData();
      }
    },
    async last() {
      this.page = this.page - 1;
      this.search = "";
      await this.loadData();
    },

    async loadData() {
      const response = await axios.get(
        `https://api.hnpwa.com/v0/show/${this.page}.json`
      );
      this.newspages = [...response.data];
    }
  }
};
</script>

<style>
</style>


