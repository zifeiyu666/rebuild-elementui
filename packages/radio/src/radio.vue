<template>
  <label class='zf-radio'
         role="radio"
         :class="{
            'is-checked': value === label,
            'is-disabled': disabled
          }"
         tabindex="-1">

    <span class='zf-radio__inner'></span>
    <input class='zf-radio__original'
           type="radio"
           v-bind='$attrs'
           aria-hidden="true"
           :checked='checked'
           :value='label'
           :name='name'
           :disabled="disabled"
           tabindex="-1"
           v-on='$radioListeners'>
    <span class='zf-radio__label'>
      <slot>{{label}}</slot>
    </span>

  </label>
</template>
<script>
export default {
  name: 'zfRadio',
  model: {
    prop: 'value',
    event: 'change'
  },
  data() {
    return {}
  },
  props: {
    label: String,
    value: String,
    name: {
      type: String,
      default: 'radio'
    },
    checked: Boolean,
    disabled: Boolean
  },
  computed: {
    $radioListeners() {
      let vm = this
      return Object.assign({}, vm.$listeners, {
        change(e) {
          vm.$emit('change', e.target.value)
        }
      })
    }
  }
}
</script>

