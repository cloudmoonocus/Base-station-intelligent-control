<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header v-show="$route.meta.ifShowFooter"></Header>
  <RouterView />
  <Footer v-show="$route.meta.ifShowFooter"></Footer>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  color: #fff;
}

body {
  background:
    linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
    linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
  background-color: #131313;
  background-size: 20px 20px;
}

#app {
  padding: 0 10vw;
}

img {
  border-radius: 15px;
}

::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a5a5a5;
}

::-webkit-scrollbar-corner {
  background: rgb(145, 145, 145);
}
</style>
