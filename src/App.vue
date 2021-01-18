<template>
  <div>
    <my-menu></my-menu>    
    <router-view></router-view>
    <home-page></home-page>
  </div>
  
</template>

<script>
import Menu from './components/Menu.vue';
import Home from './components/Home.vue';


export default {
	
  components:{
		'my-menu': Menu,
    'homePage': Home,
    
  },
  
  data () {
    return {      
      
    }
  }
}
</script>

<style scoped>

</style>


