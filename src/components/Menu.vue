<template>
  <b-container>
    <b-navbar toggleable="lg" class="myVariant" fixed="top">
      <b-navbar-brand to="/">
        <b-img 
          src="./src/assets/logoDentalSci.png" 
          fluid 
          alt="Logo-DentalSci"
        ></b-img>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto fontDentalSciMenu">
          <b-nav-item :href="menu.href" v-for="menu in menus" :key="menu.id">{{ menu.title }}</b-nav-item>          
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="mx-auto fontDentalSciMenu">          
          <b-dropdown variant="outline-info block" size="md">
            <template #button-content>
              <b-icon icon="people-fill" scale="0.7" aria-hidden="true"></b-icon>
              Mais
            </template>
            <b-dropdown-item-button variant="secondary" v-for="dropdown in dropdown" :key="dropdown.id"> 
              <router-link :to="dropdown.link">{{ dropdown.title }}</router-link>              
              <b-dropdown-divider></b-dropdown-divider>                 
            </b-dropdown-item-button>
          </b-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>    
  </b-container>
</template>

<script>
export default {

  data() {

    return{
      menus: [
        { title: 'home', href: '/'},
        { title: 'recursos', href: '#Recursos'},
        { title: 'colaboradores', href: '#Colaboradores'},
        { title: 'vantagens',  href: '#Vantagens'},
        { title: 'fale conosco',  href: '#Faleconosco'}
      ],
      dropdown: [
        { title: 'Entrar', link: '/Login'},
        { title: 'Cadastre-se', link: '/SignUp'},
      ],
    }
  }  
};

</script>

<style scoped>

.fontDentalSciMenu {
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  color: #222;  
}

.myVariant{
  background-color: #fff;
  box-shadow: 6px 6px 6px rgba(122, 122, 122, 0.2);
}

</style>