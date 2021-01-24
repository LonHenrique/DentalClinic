<template>
  <div class="container">
    <b-row>
      <b-col class="alignSession">
        <b-row>
          <b-col cols="4">
            <h4>Sobre</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum
              laboriosam corporis saepe libero! Vitae, voluptatibus? Voluptatum
              at earum doloribus?
            </p>
          </b-col>
          <b-col cols="4">
            <h4>Contato</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              expedita deserunt atque, modi maxime fuga aut mollitia rem
              quibusdam doloremque.
            </p>
            <h4>contato@meu-email.com.br</h4>
          </b-col>
          <b-col cols="4">
            <h4>Redes Sociais</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              laborum tenetur velit vitae in libero vel? Repellendus at
              voluptate qui?
            </p>
            <b-row>
                <b-col v-for="social in socials" :key="social.id"><b-icon class="icons" :icon="social.icon"></b-icon></b-col>              
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>


<script>
export default {

  data() {

    return{
      socials: [
        {
          icon: 'facebook'
        },
        {
          icon: 'instagram'
        },
        {
          icon: 'twitter'
        },
        {
          icon: 'youtube'
        }
      ]
    }
  }
};
</script>

<style scoped>
.alignSession {
  margin: 7% 0 7% 0;
}
h4{
    font-family: 'Poppins', sans-serif;
    color: #FFF;
    font-size: 18px;
}
p{
    color: #777;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
}

.icons{
  background-color:#111;
  border-radius: 5px;
  width: 35px;
  height: 35px;
  padding: 10px;
  color: #777;
}

.icons:hover{
  background-color:#8490ff;
  cursor: pointer;
  border-radius: 5px;
  width: 35px;
  height: 35px;
  padding: 10px;
  color: #fff;
  transition:linear 0.5s ;
}
</style>