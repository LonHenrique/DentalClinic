<template>
    <div class="alignSession">
        <b-card-group>
            <b-card 
                v-for="card in cards" 
                :key="card.id" 
                :title="card.title" 
                :img-src="card.src" 
                img-alt="Image" 
                img-top 
                responsive
            >
                <b-card-text 
                    class="my-5">{{ card.desc }}
                </b-card-text>      
            </b-card>        
        </b-card-group>
    </div>
</template>

<script>

    export default {

        data() {
            return{
                cards: [
                    {   
                        src:'./src/assets/f3.png',
                        title:'Planejamento de Casos', 
                        desc:'Um sistema inteligente planeja seus casos de modo individual considerando as melhores práticas clínicas. Para cada caso você terá a sugestão de diagnóstico, prognóstico e tratamento, além de recomendações sobre diferentes técnicas.'
                    },
                    {
                        src:'./src/assets/f2.png',
                        title: 'Atualização Profissional',
                        desc: 'Você pode utilizar o sistema para simular diferentes problemas dento-faciais. DentalSci é uma ferramenta didática para aperfeiçoar sua técnica. Para cada caso você poderá acessar imagens, vídeos e recomendação clínicas específicas.'
                    },
                    {
                        src:'./src/assets/f1.png',
                        title: 'Planejamento de Casos',
                        desc: 'Por menos que a assinatura de um periódico você recebe muito mais. O Sistema DentalSci atualiza o profissional sobre o conhecimento mais recente em diversas especialidades a respeito de problemas clínicos específicos, valorizando seu investimento'
                    }
                ]
            }
        },
    }
</script>

<style scoped>

img {
    width: 15%;    
    height: auto;        
    margin-left: 20px;
    margin-top: 70%;
    margin-bottom: 2em;
}

h4.card-title, p.card-text {
    font-family: 'Poppins', sans-serif;
}

.card {
    border: none;
}
.alignSession {
  margin: 12% 0 8% 0;
}
</style>