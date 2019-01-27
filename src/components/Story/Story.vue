<template>
  <div class="container">
    <h2 class="news__title">{{ newspage.title }}</h2>

    <div class="news__title--block">
      <p>Score: {{ newspage.score }}</p>
      <a :href=" newspage.url " class="news__url">{{ newspage.url }}</a>
    </div>
    <button
      class="btn btn--login"
      v-show="showBtn  && !showComments"
      @click="showComments = !showComments"
    >Display comments</button>
    <button
      class="btn btn--signup"
      v-show="showBtn  && showComments"
      @click="showComments = !showComments"
    >hide comments</button>

    <div v-for="comment in comments" :key="comment.id">
      <div class="comment__block" v-show="showComments">
        <h3>Name: {{ comment.by }}</h3>
        <h5>Time: {{ comment.time }}</h5>
        <p class="comment__text">{{ comment.text }}</p>
        <div v-show="comment.by == null" class="show">
          <h2>No comment. T_T</h2>
        </div>
      </div>
    </div>

    <div v-show="show" class="show">
      <h2>No comments yet. T_T</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Story",
  data: function() {
    return {
      newspage: {},
      comments: [],
      show: false,
      showBtn: true,
      showComments: false
    };
  },
  created: function() {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/" +
          this.$route.params.id +
          ".json"
      )
      .then(res => {
        this.newspage = res.data;
        this.newspage.comments = [];
        this.newspage.kids.forEach(id => {
          axios
            .get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
            .then(res => {
              if (res.data.by == null) {
                console.log(res.data.by);
              }

              this.comments.push(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
        this.show = true;
        this.showBtn = false;
      });
  }
};
</script>

<style lang="scss" scoped>
.news__title {
  color: $first-color;
  font-size: 1.5rem;
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
.news__title--block {
  margin: 10px 20px 20px 20px;
}
.news__url {
  color: red;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid $second-color;
  &:hover {
    border-bottom: 1px solid red;
  }
  &:active {
    color: rgba(red, 0.5);
    border-bottom: 1px solid rgba(red, 0.5);
  }
}
.comment__block {
  background: rgba(128, 128, 128, 0.13);
  margin: 5px 0;
  padding: 5px;
  border-radius: 6px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  @include small {
    margin: 7px 0;
    padding: 7px;
  }

  @include medium {
    margin: 7px 0;
    padding: 7px;
  }

  @include large {
    margin: 10px 0;
    padding: 10px;
  }

  @include extra {
    margin: 10px 0;
    padding: 10px;
  }
}
.comment__text {
  overflow: hidden;
  margin: 0 15px;
  @include small {
    margin: 0 20px;
  }

  @include medium {
    margin: 0 30px;
  }

  @include large {
    margin: 0 40px;
  }

  @include extra {
    margin: 0 50px;
  }
}
.show {
  margin: 20px;
  color: $fourth-color;
}
</style>


