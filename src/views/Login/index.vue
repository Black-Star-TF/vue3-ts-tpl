<template>
  <div class="title">This is the login page.</div>
</template>

<script lang="ts" setup>
import loginApi from '@/service/api/login'
loginApi
  .login({
    userName: '',
    passWord: ''
  })
  .then((res) => {
    console.log(res.data)
  })
</script>

<style lang="scss" scoped>
.title {
  font-size: 30px;
  line-height: 50px;
  text-align: center;
}
</style>
