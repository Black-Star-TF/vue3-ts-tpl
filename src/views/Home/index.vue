<template>
  <div class="title">This is the home page.</div>
  <div class="store-name">{{ mainStore.name }}</div>
</template>

<script lang="ts" setup>
import { useMainStore } from '@/store/main'
const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
.title {
  font-size: 30px;
  line-height: 50px;
  text-align: center;
}

.store-name {
  font-size: 40px;
  line-height: 100px;
  text-align: center;
  color: $test-color;
}
</style>
