<template>
  <div>
    <my-menu></my-menu>    
    <router-view></router-view>
  </div>
  
</template>

<script>
import Menu from './components/Menu.vue';
import Home from './components/Home.vue';
// import Login from './components/Login.vue';
// import SignUp from './components/SignUp.vue';

export default {
	
  components:{
		'my-menu': Menu,
    'homePage': Home,    
    // 'my-login' : Login,
    // 'my-signup' : SignUp
  },
  
  data () {
    return {      
      
    }
  }
}
</script>

<style scoped>

</style>


