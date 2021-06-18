<template>
  <div class="puzzle" @click.self="clearHighlights">
    <nuxt-content :document="doc" />
    <Grid />
    <button @click="validate">
      Solve
    </button>
    <div class="white-space" @click.self="clearHighlights" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const doc = await $content('puzzle').fetch()
    return {
      doc
    }
  },

  computed: {
    givens () {
      return this.$route.query.givens
    }
  },

  mounted () {
    if (this.$route.query.givens) {
      this.$store.commit('initFromString', this.$route.query.givens)
    }
  },

  methods: {
    clearHighlights () {
      this.$store.commit('highlights/clear')
    },

    validate () {
      this.$store.dispatch('validate')
    }
  }
}
</script>

<style lang="scss">
html {
  min-height: 100%;
  position: relative;
}

body {
  height: 100%;
}

.puzzle {
  width: 576px;

  button {
    position: relative;
    z-index: 10;
  }
}

.white-space {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 2;
}
</style>
