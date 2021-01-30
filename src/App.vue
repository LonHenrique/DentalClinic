<template>
  <div>    
    <router-view/>
  </div>
  
</template>

<script>
import { routes } from './routes/routes.js';

export default {
  
  data () {
    return {      
      routes: routes
    }
  }
}
</script>

<style scoped>

</style>


