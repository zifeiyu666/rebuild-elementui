<template>
  <div :class='[
      type === "textarea"? "zf-textarea": "zf-input",
       { 
         "is-disabled": disabled,
         "is-clearable": clearable,
         "is-icon": hasIcon,
         "is-right": rightIcon,
         "is-left": leftIcon
       }
       ]'>
    <template v-if='type != "textarea"'>
      <span v-if='leftIcon'
            class="zf-input__staticIcon is-left"
            :class='leftIcon'></span>
      <input class='zf-input__inner'
             :value='value'
             :disabled='disabled'
             :placeholder="placeholder"
             v-on="$inputListeners"
             :type="showPassword ? ( passwordVisible ? 'text' : 'password' ) : (type ? type : 'text')">
      <span v-if='clearable'
            class='zf-input__icon zf-icon-circle-close'
            @click='clearHandle'></span>
      <span v-if='showPassword'
            class='zf-input__icon zf-icon-view'
            @click='showPasswordHandle'></span>
      <span v-if='rightIcon'
            class="zf-input__staticIcon is-right"
            :class='rightIcon'></span>
    </template>
    <textarea v-else
              :value='value'
              class='zf-textarea__inner'
              :placeholder='placeholder'
              v-bind="$attrs"
              clearable
              v-on="$inputListeners"></textarea>

  </div>

</template>

<script>
export default {
  name: 'ZfInput',
  data() {
    return {
      passwordVisible: false
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    leftIcon: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    reg: {
      type: RegExp
    },
    disabled: Boolean,
    clearable: Boolean,
    showPassword: Boolean
  },
  computed: {
    $inputListeners() {
      let reg = new RegExp(this.reg)
      let vm = this
      return Object.assign({}, this.$listeners, {
        input(event) {
          var value = event.target.value
          value = reg ? value.replace(reg, '') : value
          vm.$emit('input', value)
          event.target.value = value
        },
        change(event) {
          var value = event.target.value
          vm.$emit('change', value)
        }
      })
    },
    hasIcon() {
      if (this.clearable || this.showPassword) {
        return true
      }
      return false
    }
  },
  methods: {
    clearHandle() {
      this.$emit('input', '')
    },
    showPasswordHandle() {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

