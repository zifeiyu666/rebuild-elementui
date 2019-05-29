<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'zfRadioGroup',
  props: {
    value: String
  }
}
</script>
