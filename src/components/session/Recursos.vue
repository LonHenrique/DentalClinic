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
        imgFC        
      >
        <b-card-text>{{ card.desc }} </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
            src: "./src/assets/f3.png",
            title: "Lorem ipsum dolor sit",
            desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, ex at facilisis tristique, ante nunc consectetur arcu, eget sodales neque ipsum sit amet ligula. Praesent congue efficitur consectetur. Suspendisse non risus.",
            
            
          
        },
        {
            src: "./src/assets/f2.png",
            title: "Lorem ipsum dolor sit",
            desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, ex at facilisis tristique, ante nunc consectetur arcu, eget sodales neque ipsum sit amet ligula. Praesent congue efficitur consectetur. Suspendisse non risus.",
        },
        {
            src: "./src/assets/f1.png",
            title: "Lorem ipsum dolor sit",
            desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, ex at facilisis tristique, ante nunc consectetur arcu, eget sodales neque ipsum sit amet ligula. Praesent congue efficitur consectetur. Suspendisse non risus.",
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 51px;
  height: 52px;
  margin-left: 20px;
  margin-top: 70%;
  margin-bottom: 2em;
}

h4.card-title,
p.card-text {
  font-family: "Poppins", sans-serif;
}

.card {
  border: none;
}
.alignSession {
  margin: 10% 0 8% 0;
}

@media (min-width: 768px) and (max-width: 1024px) {
    img {
        width: 25%;        
        margin-left: 33%;
        margin-top: 70%;
        margin-bottom: 2em;
    }
    h4.card-title {
        font-size: 20px;
    }
    p.card-text{
        margin-top: 15px;
        text-align: justify;
    }
}
</style>