<template>  
    <div>
      <my-menu></my-menu>
      <div class="container-lg">
        <section id="Home">
          <div class="row bg-image mySession">
            <b-col class="col-md-5 col-sm my-5">
              <div class="row my-5 mx-2">
                <h4 class="fontFamily fontSessionHome">
                  <strong>inteligência clínica </strong><br />Atualização e
                  planejamento clínico
                </h4>
                <h1 class="myH1Session">DentalClinic</h1>
                <p class="fontFamily">
                  DentalClinic Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Quisque nec egestas ex, ac viverra dolor.
                  Donec mattis turpis efficitur vulputate consectetur. Maecenas
                  viverra ipsum in lobortis vehicula. Nulla facilisi. Maecenas
                  in.
                </p>
              </div>
              <div>
                <btn-assign></btn-assign>
              </div>
            </b-col>
          </div>
        </section>
      </div>

      <div class="d-flex container sessionItems">
        <section>
          <div id="Recursos">
            <my-resources></my-resources>
          </div>
        </section>
      </div>
      <div>
        <section>
          <div id="Colaboradores">
            <my-contributors></my-contributors>
          </div>
        </section>
      </div>

      <div>
        <section>
          <div id="Vantagens">
            <my-benefits></my-benefits>
          </div>
        </section>
      </div>

      <div class="mySession">
        <section>
          <div id="Faleconosco">
            <my-contact-us></my-contact-us>
          </div>
        </section>
      </div>
    </div>  
</template>

<script>
import Recursos from "./session/Recursos.vue";
import Colaboradores from "./session/Colaboradores.vue";
import Vantagens from "./session/Vantagens.vue";
import Botao from "../components/shared/botao/Botao.vue";
import FaleConosco from "../components/session/FaleConosco.vue";
import Menu from "../components/Menu.vue";

export default {
  components: {
    "my-menu": Menu,
    "my-resources": Recursos,
    "my-contributors": Colaboradores,
    "my-benefits": Vantagens,
    "btn-assign": Botao,
    "my-contact-us": FaleConosco,
  },
};
</script>

<style scoped>

    .mySession {
    background-color: #222;
    margin-top: 15em;
}

.fontFamily {
  font-family: "Poppins", serif;
}
.relative {
  position: relative;
}

.bg-image {
  background-image: url("../../src/assets/sorrisoFeminino.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  height: 600px;
}

.fontSessionHome {
  font-size: 18px;
  text-transform: uppercase;
}

.myH1Session {
  font-size: 60px;
}

p {
  font-size: 16px;
  margin-top: 10px;
  color: #777;
  text-align: justify;
}

.btnAssign {
  background: linear-gradient(45deg, #62bdfc 0%, #8490ff 100%);
  color: #fff;
  border-radius: 15px;
  padding: 5px;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 40px;
  width: 300px;
  cursor: pointer;
  text-decoration: none;
  border: none;
  box-shadow: 1px 1px 2px #777;
  text-shadow: 1px 2px 2px #777;
}

.btnAssignAlign {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btnAssign:hover {
  background: #32a3f3;
}

.sessionItems {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 770px) and (max-width: 990px) {
  .btnAssign {
    background: linear-gradient(45deg, #62bdfc 0%, #8490ff 100%);
    color: #fff;
    border-radius: 15px;
    padding: 5px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 40px;
    width: 200px;
    cursor: pointer;
    text-decoration: none;
    border: none;
    box-shadow: 1px 1px 2px #777;
    text-shadow: 1px 2px 2px #777;
  }
}
</style>