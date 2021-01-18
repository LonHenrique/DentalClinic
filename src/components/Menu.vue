<template>
  <b-container>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#">
        <b-img
          src="./src/assets/logoDentalSci.png"
          fluid
          alt="Logo-DentalSci"
        ></b-img>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto fontDentalSciMenu">
          <b-nav-item :to="menu.link" v-for="menu of menu" :key="menu.id" :class="menu.title">{{ menu.title }}</b-nav-item>          
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="mx-auto fontDentalSciMenu">
          
          <b-dropdown variant="outline-info block" size="md">
            <template #button-content>
              <b-icon icon="people-fill" scale="0.7" aria-hidden="true"></b-icon>
              Mais
            </template>
            <b-dropdown-item-button variant="secondary" v-for="dropdown in dropdown" :key="dropdown.id">                              
              <b-icon :icon=dropdown.icon scale="0.7" aria-hidden="true"><b-icon-link :to=menu.link></b-icon-link></b-icon>{{ dropdown.title }}
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
      menu: [
        { title: 'home', link: ''},
        { title: 'recursos', link: '/Login'},
        { title: 'colaboradores', link: '/SignUp'},
        { title: 'vantagens', link: ''},
        { title: 'fale conosco', link: '/Login'},
      ],
      dropdown: [
        { title: 'Entrar', icon:'person-fill', link: 'Login'},
        { title: 'Cadastre-se', icon:'person-plus-fill', link: 'SignUp'},
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

</style>