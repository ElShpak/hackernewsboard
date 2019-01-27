<template >
  <div class="header">
    <div class="logo">
      <i class="material-icons md-36">radio</i>
      <h1>
        <router-link
          :to="{ path: '/'}"
          class="logo__name"
          title="logo and link to top news"
        >HackNewsBoard</router-link>
      </h1>
    </div>
    <div class="header__buttons">
      <div class="search" title="search">
        <i class="material-icons icon__search">search</i>
        <input
          class="search__field"
          type="text"
          placeholder="search..."
          :value="search"
          @input="onChange"
        >
      </div>
      <div class="store">
        <router-link :to="{ path: '/favorites' }" title="favorites">
          <i class="material-icons store">favorite</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/utils/bus";

export default {
  name: "Header",
  data() {
    return {
      search: "",
      todos: []
    };
  },
  created: async function() {
    bus.$on("search", search => (this.search = ""));
  },
  methods: {
    onChange(ev) {
      bus.$emit("search", ev.target.value.trim());
    }
  }
};
</script>

<style lang="scss" >
.header {
  position: fixed;
  left: 0;
  top: 0;
  padding: 5px 0;
  height: 130px;
  width: 100%;
  background: $second-color;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 2px solid $fourth-color;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  @include small {
    padding: 5px 0;
    flex-direction: column;
    height: 130px;
  }
  @include medium {
    padding: 0px 0;
    flex-direction: row;
    height: 60px;
  }
  @include large {
    padding: 0px 0;
    flex-direction: row;
    height: 60px;
  }
  @include extra {
    padding: 0px 0;
    flex-direction: row;
    height: 60px;
  }
}
.logo {
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  color: $first-color;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: $third-color;
  }
  &:active {
    color: rgba($third-color, 0.2);
  }
  @include small {
    padding: 0px 15px;
  }

  @include medium {
    padding: 0px 20px;
  }

  @include large {
    padding: 0px 25px;
  }

  @include extra {
    padding: 0px 30px;
  }
}

.logo__name {
  text-decoration: none;
  color: $third-color;
  padding-left: 20px;
  text-transform: uppercase;
  font-size: 1.5rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: $first-color;
  }
  &:active {
    color: rgba($first-color, 0.2);
  }
  @include small {
    font-size: 1.7rem;
  }

  @include medium {
    font-size: 2rem;
  }

  @include large {
    font-size: 2.2rem;
  }

  @include extra {
    font-size: 2.5rem;
  }
}

.header__buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include medium {
    flex-direction: row;
    align-items: flex-end;
  }
}
.search {
  margin: 0 20px;
  padding: 0;
}
.search__field {
  width: 100%;
  height: 35px;
  border-radius: 6px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  border: none;
  padding: 0 40px;
  margin: 0;
  border: 2px solid $fourth-color;
  transition: background 0.2s ease-in-out;
  &:hover,
  &:active {
    background: $fourth-color;
  }
  @include small {
    width: 100%;
    height: 35px;
  }

  @include medium {
    width: 200px;
    height: 35px;
  }

  @include large {
    width: 250px;
    height: 40px;
  }

  @include extra {
    width: 300px;
    height: 40px;
  }
}

.icon__search {
  position: relative;
  top: 30px;
  left: 10px;
  font-size: 1.5rem;
  @include medium {
    top: 8px;
    left: 35px;
  }
}

.users {
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>


