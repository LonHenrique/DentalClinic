<template>
  <b-container fluid>
    <main>
      <section class="glass">
        <b-row>
          <b-col>
            <div class="my-5 mx-3">
              <h3>Seja Bem Vindo - Efetue seu cadastro.</h3>
            </div>
          </b-col>
        </b-row>
        <b-form class="mx-2" id="cadastrar">  
            <b-row>
                <b-col cols="4">
                    <b-form-group
                        id="nome"                                    
                        v-model="nome"
                        label-for="nome"
                        description="Digite seu nome completo."
                        class="was-validated mx-2 my-3"                        
                    >
                        <b-form-input 
                            class="p-2 w-100"
                            id="nome"
                            v-model="nome"
                            type="name"
                            placeholder="Nome"
                            required                            
                        >
                        </b-form-input>                    
                    </b-form-group>
                </b-col>
                <b-col cols="4">
                    <b-form-group
                        id="email"                                    
                        v-model="email"
                        label-for="email"
                        description="Digite um e-mail válido."
                        class="was-validated mx-2 my-3"
                        
                    >
                        <b-form-input 
                            class="p-2 w-100"
                            id="email"
                            v-model="email"
                            type="email"
                            placeholder="E-mail"
                            required                            
                        >
                        </b-form-input>                    
                    </b-form-group>
                </b-col> 
                <b-col cols="4">
                    <b-form-group
                        id="cpf"                                    
                        v-model="cpf"
                        label-for="cpf"
                        description="Informe o seu CPF."
                        class="was-validated mx-2 my-3"
                        
                    >
                        <b-form-input 
                            class="p-2 w-100"
                            id="cpf"
                            v-model="cpf"
                            type="text"
                            placeholder="CPF"
                            required                            
                        >
                        </b-form-input>                    
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4">
                    <b-form-group
                        id="telefone"                                    
                        v-model="telefone"
                        label-for="telefone"
                        description="Informe seu DDD e o numero do seu telefone"
                        class="was-validated mx-2 my-3"
                        
                    >
                        <b-form-input 
                            class="p-2 w-100"
                            id="telefone"
                            v-model="telefone"
                            type="tel"
                            placeholder="(99) 99999-9999"
                            required                            
                        >
                        </b-form-input>                    
                    </b-form-group>
                </b-col>
                <b-col cols="4">
                    <b-form-group
                        id="cidade"                                    
                        v-model="cidade"
                        label-for="cidade"
                        description="Informe sua cidade."
                        class="was-validated mx-2 my-3"
                        
                    >
                        <b-form-input 
                            class="p-2 w-100"
                            id="cidade"
                            v-model="cidade"
                            type="text"
                            placeholder="Cidade"
                            required                            
                        >
                        </b-form-input>                    
                    </b-form-group>
                </b-col>
                <b-col cols="4">
                    <b-form-group
                        id="estado"                                    
                        v-model="estado"
                        label-for="estado"
                        description="Informe seu estado."
                        class="was-validated mx-2 my-3"
                        
                    >
                        <b-form-input 
                            list="estados"
                            class="p-2 w-100"
                            id="estado"
                            v-model="estado"
                            type="text"
                            placeholder="Estado"
                            required                                                                                
                        >
                                               
                        </b-form-input>     
                        <datalist id="estados">
                            <option>Escolha o Estado</option>
                            <option v-for="estado in estados" :key="estado.id">{{ estado }}</option>
                        </datalist>               
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="4">
                    <b-form-group
                        id="area"                                    
                        v-model="area"
                        label-for="area"
                        description="Selecione a area de atuação."
                        class="was-validated mx-2 my-3"
                        
                    >
                        <b-form-input 
                            list="areas"
                            class="p-2 w-100"
                            id="area"
                            v-model="area"
                            type="text"
                            placeholder="Area de atuação"
                            required                                                                                
                        >
                                               
                        </b-form-input>     
                        <b-datalist id="areas">
                            <option>Escolha a Área</option>
                            <option v-for="area in areas" :key="area.id">{{ area }}</option>
                        </b-datalist>               
                    </b-form-group>
                </b-col>
                <b-col cols="4">
                    <b-form-group
                        id="senha"                                    
                        v-model="senha"
                        label-for="senha"
                        description="Informe uma senha."
                        class="was-validated mx-2 my-3"                        
                    >
                        <b-form-input 
                            class="p-2 w-100"
                            id="senha"
                            v-model="senha"
                            type="password"
                            placeholder="Senha"
                            required                            
                        >
                        </b-form-input>                    
                    </b-form-group>
                </b-col>
                <b-col cols="4">                    
                    <b-form-group
                        id="confirmarsenha"                                    
                        v-model="confirmasenha"
                        label-for="confirmar"
                        description="Digite novamente a senha para confirmar."
                        class="was-validated mx-2 my-3"
                        
                    >
                        <b-form-input 
                            class="p-2 w-100"
                            id="confirmasenha"
                            v-model="confirmasenha"
                            type="password"
                            placeholder="Confirmar Senha"
                            required                                                       
                        >
                        </b-form-input>                    
                    </b-form-group>                                                   
                </b-col>           
            </b-row>
        </b-form>
        <b-row>
            <b-col>
                <b-form-group class="alignInputSubmit my-2">
                    <b-button class="btnLoggin mt-3" id="cadastrar" type="submit" variant="primary">Cadastrar</b-button>                                    
                </b-form-group> 
            </b-col>
        </b-row>

        <b-row class="d-flex">
          <b-col class="links">
            <b-link to="/">Voltar</b-link>
          </b-col>
        </b-row>
      </section>
    </main>
  </b-container>
</template>

<script>
export default {
    data: () => {
        return{
            estados: {
                '1' : 'São Paulo',
                '2' : 'Parana',
                '3' :'Rio de Janeiro',
                '4' : 'Minas Gerais'                
            },

            areas: {
                '1' : 'Bruxismo',
                '2' : 'Cirurgia Ortográfica',
                '3' : 'Clínica Geral',
                '4' : 'Dor miofasal',
                '5' : 'DTM',
                '6' : 'Fonoaudiologia',
                '7' : 'Ortodontia Corretiva',
                '8' : 'Ortodontia Preventiva',
                '9' : 'Ortopedia funcional dos maxilares',
                '10' : 'Odontopediatria',
            }
        }
    }

};
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.alignInputSubmit {
  display: flex;
  justify-content: center;    
}

h3 {
  text-align: center;
  font-size: 25px;
  font-family: "Poppins", sans-serif;
  color: #064e9b;
}

main {
  min-height: 100vh;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass {
  background: #fff;
  width: 50%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 1.5rem;  
  padding: 1%;
  box-shadow: 6px 6px 6px rgba(122, 122, 122, 0.2);
  backdrop-filter: blur(2rem);
}

.btnLoggin {
  font-family: "Poppins", sans-serif;
  background: #007bff;
  border: none;
  padding: 10px;
  min-width: 300px;
  line-height: 30px;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 1rem;
}
.btnLoggin:hover {
  background: #064e9b;
}

.links {
  text-align: center;
  margin-top: 10px;  
}
</style>