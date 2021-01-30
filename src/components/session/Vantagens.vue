<template>
  <div class="container">
    <b-row>
      <b-col class="col-lg-6 col-md alignSession">
        <b-row>
          <b-col cols="4" v-for="icone in icones" :key="icone.id" class="my-1">
            <b-img :src="icone.src" class="icons"></b-img>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="col-lg-6 col-md alignSession">
        <h4>Lorem ipsum dolor sit amet consectetur</h4>
        <p class="pfonte">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          eaque amet quos est assumenda ab maxime odit blanditiis similique
          minima distinctio rerum unde omnis, alias itaque id perferendis
          repudiandae laborum eius voluptatum at harum in. Ut dolore quos
          itaque, qui ea id.
        </p>
        <btn-assign></btn-assign>
      </b-col>
    </b-row>
    <div class="container mb-5">
      <b-row>
        <b-col>
          <h1>153</h1>
          <p class="pfonte">Números de vídeos</p>
        </b-col>
        <b-col>
          <h1>285</h1>
          <p class="pfonte">Imagens cadastradas</p>
        </b-col>
        <b-col>
          <h1>120</h1>
          <p class="pfonte">Recomendações Clínicas</p>
        </b-col>
        <b-col>
          <h1>173</h1>
          <p class="pfonte">Melhores Práticas</p>
        </b-col>
        <b-col>
          <h1>885</h1>
          <p class="pfonte">Horas/Pesquisa Poupadas</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Botao from "../shared/botao/Botao.vue";

export default {
  data() {
    return {
      icones: [
        {
          src: "../../../src/assets/o1.png",
        },
        {
          src: "../../../src/assets/o2.png",
        },
        {
          src: "../../../src/assets/o3.png",
        },
        {
          src: "../../../src/assets/o4.png",
        },
        {
          src: "../../../src/assets/o5.png",
        },
        {
          src: "../../../src/assets/o6.png",
        },
      ],
    };
  },

  components: {
    "btn-assign": Botao,
  },
};
</script>

<style scoped>

.alignSession {
  margin: 19% 0 15% 0;
}

h1{    
    color: #222;
    font-size: 48;
}

h4 {
  color: #222;  
  font-size: 18px;
  margin: 3em 0em 1em 0em;
  text-align: center;
}

.pfonte {
  color: #777;  
  font-size: 14px;
  margin: 0em 0em 2em 0em;
  text-align: justify;
}

.icons {
  text-align: center;
  background-color: #fff;
  padding: 20%;
  width: 130px;
  height: 125px;
  box-shadow: 1px 10px 30px rgba(132, 144, 255, 0.3);
}
h1,h4,p {
    font-family: 'Poppins', sans-serif;
}

@media (min-width:768px) and (max-width:1024px ){
	.icons {
		text-align: center;
		background-color: #fff;
		padding: 10%;
		width: 70px;
		height: 65px;
		box-shadow: 1px 10px 30px rgba(132, 144, 255, 0.3);
		margin-top: 5em;
		
	}

	.pfonte {
		color: #777;  
		font-size: 16px;
		margin: 0em 0em 2em 0em;
		text-align: justify;
	}
}
</style>