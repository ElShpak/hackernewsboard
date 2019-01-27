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
          <div class="newspage__block">
            <h2>
              <router-link
                class="newspage__title newspage__title--ask"
                :to="{path: '/story/' + newspage.id}"
              >{{ newspage.title }}</router-link>
            </h2>

            <p>Comments: {{ newspage.comments_count }}</p>
            <p>Score: {{ newspage.points }}</p>
          </div>
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
import newsitem from "@/components/newslist/newsitem.vue";

export default {
  name: "Ask",
  components: {
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
        `https://api.hnpwa.com/v0/ask/${this.page}.json`
      );
      this.newspages = [...response.data];
    }
  }
};
</script>

<style lang="scss" scoped>
.newspage__title--ask {
  color: $first-color;
  font-size: 1.4rem;
  text-decoration: none;
  border-bottom: 1px solid $first-color;
  &:hover {
    color: rgba($first-color, 0.6);
  }
  &:active {
    color: rgba($first-color, 0.2);
  }
  @include small {
    font-size: 1.5rem;
  }

  @include medium {
    font-size: 1.6rem;
  }

  @include large {
    font-size: 1.7rem;
  }

  @include extra {
    font-size: 1.8rem;
  }
}
</style>
