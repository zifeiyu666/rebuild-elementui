<template>
  <button @click='handleClick'
          class='zf-btn'
          :class="[
          type ? 'zf-btn--' + type :'', 
          size ? 'zf-btn--' + size : '',
          {
            'is-disabled':(disabled || loading), 
            'is-loading':loading, 
            'is-plain':plain, 
            'is-round':round, 
            'is-circle':circle
          }
          ]">
    <i :class='loading ? "zf-icon-loading" : icon'></i>
    <slot v-if='!icon'></slot>
  </button>
</template>
<script>
export default {
  name: 'ZfButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    loading: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

