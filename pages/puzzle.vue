<template>
  <div class="puzzle">
    <Grid />
    <div class="white-space" @click.self="clearHighlights" />
  </div>
</template>

<script>
export default {
  methods: {
    clearHighlights (event) {
      this.$store.commit('highlights/clear')
    }
  }
}
</script>

<style>
html {
  min-height: 100%;
  position: relative;
}

body {
  height: 100%;
}

.white-space {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: -1;
}
</style>
