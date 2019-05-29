<template>
  <section>
    <h1 @click='tap'>{{name}}</h1>
    <h2>test:{{cName}}</h2>
  </section>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.bar.name
    },
    cName() {
      return this.$store.getters.cName
    }
  },

  methods: {
    tap() {
      this.$store.commit('tap')
    }
  }
}
</script>

