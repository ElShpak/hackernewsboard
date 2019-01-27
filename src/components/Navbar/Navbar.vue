<template>
  <div>
    <div class="container">
      <div class="nav__list">
        <router-link class="nav__item--link" :to="{ path: '/' }">Top</router-link>
        <router-link class="nav__item--link" :to="{ path: '/new' }">New</router-link>
        <router-link class="nav__item--link" :to="{ path: '/show' }">Show</router-link>
        <router-link class="nav__item--link" :to="{ path: '/ask' }">Ask</router-link>
        <router-link class="nav__item--link" :to="{ path: '/jobs' }">Jobs</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
.nav__list {
  padding: 0px 0px;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  height: auto;
  background: white;

  align-items: center;
  justify-content: flex-start;
  width: 100%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  @include medium {
    margin: 30px 0;

    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: none;
  }

  .nav__item--link {
    text-decoration: none;
    color: $fourth-color;
    text-align: center;
    width: 150px;
    display: inline-block;
    list-style-type: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: $font-family;

    cursor: pointer;
    margin: 0;
    padding: 0;
    transition: color 0.2s ease, border 0.8s ease, opacity 0.3s ease;

    border-bottom: 5px solid $second-color;
    &:active {
      opacity: 0.5;
    }
    &:nth-child(1):hover {
      color: $first-color;
      border-bottom: 5px solid $first-color;
    }
    &:nth-child(2):hover {
      color: #e74c3c;
      border-bottom: 5px solid #e74c3c;
    }

    &:nth-child(3):hover {
      color: #bf55ec;
      border-bottom: 5px solid #bf55ec;
    }

    &:nth-child(4):hover {
      color: #f39c12;
      border-bottom: 5px solid #f39c12;
    }
    &:nth-child(5):hover {
      color: $third-color;
      border-bottom: 5px solid $third-color;
    }
  }
}
</style>


