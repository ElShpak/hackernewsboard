<template>
  <div>
    <div class="newspage__block">
      <h2>
        <router-link
          class="newspage__title"
          :to="{path: '/story/' + newspage.id}"
        >{{ newspage.title }}</router-link>
      </h2>
      <p>
        <a class="newspage__link" :href="newspage.url">{{ newspage.url }}</a>
      </p>
      <p>Comments: {{ newspage.comments_count }}</p>
      <p>Score: {{ newspage.points }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import bus from "@/utils/bus";
import { mapActions, mapState } from "vuex";

export default {
  name: "newslist",
  props: ["newspage"]
};
</script>

