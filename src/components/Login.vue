<template>
    <b-container fluid>
        <main>
            <section class="glass">
                <b-row flex>
                    <b-col class="logo-area">
                        <div class="d-flex">
                            <b-img clas="img-fluid" srcset="../src/assets/logoDentalSci.png" alt="logoDentalSci"/>
                        </div>
                    </b-col>
                    <b-col class="assinantes-area">
                        <div class="my-lg-5 mx-3">
                            <h1>Área de Assinantes</h1>
                        <b-row>
                            <b-form class="my-5">  
                               <b-form-group
                                    id="email"                                    
                                    v-model="email"
                                    label-for="email"
                                    description="Para acessar o sistema utilize seu endereço de e-mail cadastrado."
                                    class="mb-4 was-validated"
                                >
                                    <b-form-input 
                                        class="p-2"
                                        id="email"
                                        v-model="email"
                                        type="email"
                                        placeholder="E-mail"
                                        required
                                    ></b-form-input>
                                </b-form-group> 

                                <b-form-group 
                                    id="input-group-2" 
                                    v-model="senha"
                                    label-for="senha"
                                    description="Sua senha é pessoal e instransferivel proteja-a."
                                    class="mb-4  was-validated"
                                >                                    
                                    <b-form-input
                                        class="p-2"
                                        id="senha"
                                        v-model="senha"
                                        placeholder="Senha"
                                        required
                                        type="password"
                                    >
                                    </b-form-input>

                                </b-form-group>
                                <b-form-group class="d-flex">                                    
                                    <b-button class="btnLoggin mt-3" type="submit" variant="primary">Entrar</b-button>                                    
                                </b-form-group> 
                            </b-form>                            
                        </b-row>
                        
                        <b-row class="d-flex">
                            <b-col class=" d-flex links">    
                                <b-link to="/SignUp">Cadastre-se</b-link>
                                <b-link to="/SignUp">Esqueceu a senha?</b-link>
                                <b-link to="/SignUp">Voltar</b-link>
                            </b-col>                            
                        </b-row>
                        </div>
                    </b-col>
                 </b-row>
            </section>
        </main>
    </b-container>  
</template>

<script>
export default {

    
};
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1{
    text-align: center;
    font-size: 32px;
    font-family: 'Poppins' ,sans-serif;
    color:#064e9b;
}
main {
  min-height: 100vh;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass{
    background: #fff;    
    width: 50%;
    background: linear-gradient(
        to right bottom,
         rgba(255, 255, 255, 0.7),
         rgba(255, 255, 255, 0.3)
    );
    border-radius: 1.5rem;
    z-index: 2;    
    padding: 1%;
    box-shadow: 6px 6px 6px rgba(122, 122, 122, 0.2);
    backdrop-filter: blur(2rem);
    
}

.logo-area{
    background: #FFF;    
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;   
    
}

.assinantes-area{
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.btnLoggin{
    font-family:'Poppins', sans-serif;
    background: #007bff;    
    border: none;
    padding: 10px;
    min-width: 28rem;
    line-height: 30px;
    font-size: 16px;
    text-transform: uppercase;    
    border-radius: 1rem;
}
.btnLoggin:hover{   
    background: #064e9b;
}

.links{
    display: flex;    
    justify-content: space-between;
}
</style>