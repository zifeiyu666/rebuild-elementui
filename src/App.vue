<template>
  <div id="app">
    <div class='section'>
      <zf-button @click='testClick'
                 class='btn'>{{name}}</zf-button>
      <zf-button class='btn'
                 type='primary'>button</zf-button>
      <zf-button class='btn'
                 type='success'>button</zf-button>
      <zf-button class='btn'
                 type='warning'>button</zf-button>
      <zf-button class='btn'
                 type='info'>button</zf-button>
      <zf-button class='btn'
                 type='danger'>button</zf-button>
    </div>
    <div class='section'>
      <zf-button class='btn'
                 round>button</zf-button>
      <zf-button class='btn'
                 type='primary'
                 round>button</zf-button>
      <zf-button class='btn'
                 type='success'
                 round>button</zf-button>
      <zf-button class='btn'
                 type='warning'
                 round>button</zf-button>
      <zf-button class='btn'
                 type='info'
                 round>button</zf-button>
      <zf-button class='btn'
                 type='danger'
                 round>button</zf-button>
    </div>
    <div class='section'>
      <zf-button class='btn'
                 icon='zf-icon-search'
                 circle></zf-button>
      <zf-button class='btn'
                 type='primary'
                 icon='zf-icon-edit'
                 circle></zf-button>
      <zf-button class='btn'
                 type='success'
                 icon="zf-icon-check"
                 circle></zf-button>
      <zf-button class='btn'
                 type='warning'
                 icon="zf-icon-message"
                 circle></zf-button>
      <zf-button class='btn'
                 type='info'
                 icon="zf-icon-star-off"
                 circle></zf-button>
      <zf-button class='btn'
                 type='danger'
                 icon="zf-icon-delete"
                 circle></zf-button>
    </div>
    <div class='section'>
      <zf-button class='btn'
                 disabled>button</zf-button>
      <zf-button class='btn'
                 disabled
                 type='primary'>button</zf-button>
      <zf-button class='btn'
                 disabled
                 type='success'>button</zf-button>
      <zf-button class='btn'
                 disabled
                 type='warning'>button</zf-button>
      <zf-button class='btn'
                 disabled
                 type='info'>button</zf-button>
      <zf-button class='btn'
                 disabled
                 type='danger'>button</zf-button>
    </div>
    <div class='section'>
      <zf-button class='btn'
                 loading>button</zf-button>
      <zf-button class='btn'
                 loading
                 type='primary'>button</zf-button>
      <zf-button class='btn'
                 loading
                 type='success'>button</zf-button>
      <zf-button class='btn'
                 loading
                 type='warning'>button</zf-button>
      <zf-button class='btn'
                 loading
                 type='info'>button</zf-button>
      <zf-button class='btn'
                 loading
                 type='danger'>button</zf-button>
    </div>

    <div class='section'>
      <i class='zf-icon-edit'></i>
      <i class='zf-icon-share'></i>
      <i class='zf-icon-delete'></i>
    </div>

    <!-- Link -->
    <div class='section'>
      <zf-link class='link'
               underline
               href='https://baidu.com'>Link</zf-link>
      <zf-link class='link'
               underline
               type='primary'
               href='https://baidu.com'>Link</zf-link>
      <zf-link class='link'
               type='warning'
               href='https://baidu.com'>Link</zf-link>
      <zf-link class='link'
               type='success'
               href='https://baidu.com'>Link</zf-link>
      <zf-link class='link'
               icon='zf-icon-edit'
               type='info'
               href='https://baidu.com'>Link</zf-link>
      <zf-link class='link'
               icon='zf-icon-search'
               type='danger'
               href='https://baidu.com'>Link</zf-link>
      <zf-link class='link'
               disabled
               type='info'
               href='https://baidu.com'>Link</zf-link>
      <zf-link class='link'
               disabled
               type='danger'
               href='https://baidu.com'>Link</zf-link>
    </div>
    <div class='section'>
      <zf-input placeholder='请输入内容'
                v-model="name"
                class='input' />
      <zf-input placeholder='请输入内容'
                v-model="name"
                clearable
                class='input' />
      <zf-input placeholder='请输入内容'
                disabled
                v-model="name"
                class='input' />
      <zf-input placeholder='请输入内容'
                type='password'
                show-password
                v-model="name"
                class='input' />
    </div>
    <div class='section'>

      <zf-input placeholder='请输入内容'
                right-icon='zf-icon-date'
                v-model="name"
                class='input' />
      <zf-input placeholder='请输入内容'
                left-icon='zf-icon-search'
                v-model="name"
                class='input' />
      <zf-input placeholder='请输入内容'
                type='textarea'
                v-model="name"
                rows='3'
                cols='10'
                :reg='reg'
                disabled
                class='input' />
    </div>

    <div class='section'>
      <div>
        <zf-radio @change='handleChange'
                  v-model='radio'
                  label='1'>桃子</zf-radio>
        <zf-radio v-model='radio'
                  label='2'>苹果</zf-radio>
        <zf-radio v-model='radio'
                  disabled
                  label='3'>香蕉</zf-radio>
        <zf-radio v-model='radio'
                  disabled
                  label='4'>橘子</zf-radio>
        {{radio}}
      </div>
    </div>
    <div class='section'>
      <div>
        <zf-radio-button v-model='radio'
                         label='1'>桃子</zf-radio-button>
        <zf-radio-button v-model='radio'
                         label='2'>苹果</zf-radio-button>
        <zf-radio-button v-model='radio'
                         disabled
                         label='3'>香蕉</zf-radio-button>
        <zf-radio-button v-model='radio'
                         disabled
                         label='4'>橘子</zf-radio-button>
        {{radio}}
      </div>
      <div>
        <zf-radio-button @change='handleChange'
                         v-model='radio2'
                         label='1'>桃子</zf-radio-button>
        <zf-radio-button v-model='radio2'
                         label='2'>苹果</zf-radio-button>
        <zf-radio-button v-model='radio2'
                         disabled
                         label='3'>香蕉</zf-radio-button>
        <zf-radio-button v-model='radio2'
                         disabled
                         label='4'>橘子</zf-radio-button>
      </div>
      <div>
        <zf-radio-group v-model='radio3'>
          <zf-radio-button @change='handleChange'
                           label='1'>桃子</zf-radio-button>
          <zf-radio-button label='2'>苹果</zf-radio-button>
          <zf-radio-button disabled
                           label='3'>香蕉</zf-radio-button>
          <zf-radio-button disabled
                           label='4'>橘子</zf-radio-button>
        </zf-radio-group>
      </div>

    </div>

  </div>
</template>

<script>
import fullPage from 'fullpage.js'
export default {
  name: 'app',
  data() {
    return {
      zid: '12',
      zname: 'aaaa',
      name: 'asd',
      radio: '3',
      radio2: '1',
      radio3: '1',
      reg: new RegExp(/[0-9]/, 'g')
    }
  },
  mounted() {
    new fullPage('#app', {
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['firstSlide', 'secondSlide']
    })
  },
  methods: {
    testClick() {
      this.name = 'click'
    },
    handleChange(v) {
      console.log(v)
    }
  }
}
</script>

<style lang='scss'>
#app > div {
  display: flex;
  justify-content: center;
}
.btn,
.link {
  // flex: 1;
  margin: 4px;
}
.input.zf-input {
  width: 180px;
}
.input {
  margin: auto;
}
</style>
