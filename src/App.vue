<template>
  <div>
    <my-menu></my-menu>        
    <router-view />
  </div>
  
</template>

<script>
// import { routes } from './routes/routes.js';
import Menu from './components/Menu.vue';

export default {
	
  components:{
		'my-menu': Menu,
    
  },
  
  data () {
    return {      
      routes
    }
  }
}
</script>

<style scoped>

</style>


