<template>
  <div id="app">
    <Header></Header>
    <Navbar></Navbar>

    <transition name="animation">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Navbar from "@/components/Navbar/Navbar.vue";

export default {
  name: "App",
  components: {
    Header,
    Navbar
  }
};
</script>
<style>
.animation-leave-active,
.animation-enter-active {
  transition: all 0.6s ease-in-out;
}
.animation-leave,
.animation-enter-to {
  opacity: 1;
}
.animation-leave-to,
.animation-enter {
  opacity: 0;
}
</style>

