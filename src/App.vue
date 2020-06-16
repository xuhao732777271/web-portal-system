<template>
  <div id="app">
    <cm-header />
    <router-view/>
  </div>
</template>
<script>
import cmHeader from './components/cmHeader'
export default {
  name: 'app',
  components: {
    'cm-header': cmHeader
  }
}
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
  text-align: center;
  background: yellow;
}
</style>
