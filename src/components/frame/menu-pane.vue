<template>
  <el-menu default-active="0" class="nav-menu" v-bind="themeStyles"
     :collapse="isCollapse" :router="false">
    <gaf-menu-item v-for="(item,idx) in menus" :key="idx" :index="idx.toString()" :title="item.title"
      :options="item.options" :children="item.children" :target="item.target">
    </gaf-menu-item>
  </el-menu>
</template>
<script>
import {menus} from '~/utils/menus.js'
import GafMenuItem from './menu-item.vue'
export default {
  components: {
    GafMenuItem,
  },
  props: {
    'theme': String, 
    'isCollapse': Boolean,
  },
  data () {
    return {
      msg: 'Use Vue 2.0 Today!',
      menus,
    }
  },
  computed: {
    // 计算属性的 getter
    themeStyles: function () {
      // `this` 指向 vm 实例
      if (this.theme == 'dark') {
        //dark styles
        return {
          backgroundColor: "#545c64",
          textColor: "#fff",
          activeTextColor: "#ffd04b",
        };
      }else{
        // default styles
        return {
          backgroundColor: undefined,
          textColor: undefined,
          activeTextColor: undefined,
        };
      }
    },
  }
}
</script>
<style lang="less" scoped>
</style>


