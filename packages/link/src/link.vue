<template>
  <a :href="href"
     :class="[
      'zf-link',
      type ? 'zf-link--' + type : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline'
    ]"
     @click='handleClick'>
    <i v-if='icon'
       :class="icon"></i>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'zfLink',
  props: {
    href: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    underline: Boolean
  },
  methods: {
    handleClick(evt) {
      if (this.disabled || !this.href) return
      this.$emit('click', evt)
    }
  }
}
</script>

