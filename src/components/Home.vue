<template>    
    <main>
        <div class="container-lg">
            <section id="Home">
                <div class="row bg-image mySession">                    
                    <b-col class="col-md-5 col-sm my-5">
                        <div class="row my-5 mx-2">
                            <h4 class="fontFamily fontSessionHome"><strong>inteligência clínica </strong><br>Atualização e
                                planejamento clínico</h4>
                            <h1 class="myH1Session">DentalSci</h1>
                            <p class="fontFamily">
                                DentalSci é um sistema especialista em ortodontia, ATM, odontopediatria, ortopedia funcional
                                e cirurgia bucomaxilofacial, desenvolvido para atualizar o profissional e auxiliar no
                                planejamento dos casos com base nas melhores práticas clínicas.
                            </p>
                        </div>
                        <div>
                            <div class="d-flex btnAssignAlign">   
                                <input type="button" value="assine agora" class="fontFamily btnAssign">
                            </div>
                        </div>
                    </b-col>                    
                </div>
            </section>
        </div>

            <div class ="d-flex container mySession sessionItems">
                <section>
                    <div id="Recursos">
                        <my-resources></my-resources>
                    </div>
                </section>

            </div>
            <div class="row mySessions">

                <section>
                    <div id="Colaboradores">
                        <my-contributors></my-contributors>
                    </div>
                </section>

            </div>

            <div class="row bg-danger">

                <section class="mySession">
                    <div id="Vantagens">
                        <!-- Importar o componente da sessão Vantagens -->
                    </div>
                </section>

            </div>

            <div class="row bg-dark mySession">

                <section class="#Faleconosco">
                    <div id="Faleconosco">
                        <!-- Importar o componente da sessão Fale Conosco -->
                    </div>
                </section>

            </div>
        </div>
    </main>    
</template>

<script>

import Recursos from './session/Recursos.vue';
import Colaboradores from './session/Colaboradores.vue';

    export default {
        components: {
            'my-resources': Recursos,
            'my-contributors': Colaboradores,
        }
    }
</script>

<style scoped>

.fontFamily{
    font-family: 'Poppins', serif;   
}
.relative {
    position: relative;
}

.mySession {     
    margin-bottom: 12%;    
    margin-top: 5%;
    height: 500px;            
 
}

.bg-image{       
    background-image: url('../../src/assets/sorrisoFeminino.jpeg');    
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;        
    position: relative;    
    height: 600px;    
}


.fontSessionHome{  
    font-size: 18px;        
    text-transform: uppercase;  
    
}

.myH1Session {    
    font-size: 60px;
}

p{    
    font-size: 16px;
    margin-top: 10px;
    color: #777;    
    text-align: justify;     
}

.btnAssign {
    background: linear-gradient(45deg, #62bdfc 0%, #8490ff 100%);    
    color: #FFF;
    border-radius: 15px;
    padding: 5px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 40px;
    width: 300px;
    cursor: pointer;
    text-decoration: none;    
    border: none;    
    box-shadow: 1px 1px 2px  #777;
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
@media (min-width:770px) and (max-width:990px ){
    
    .btnAssign {
        background: linear-gradient(45deg, #62bdfc 0%, #8490ff 100%);    
        color: #FFF;
        border-radius: 15px;
        padding: 5px;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 40px;
        width: 200px;
        cursor: pointer;
        text-decoration: none;    
        border: none;    
        box-shadow: 1px 1px 2px  #777;
        text-shadow: 1px 2px 2px #777;        
    }

}
</style>