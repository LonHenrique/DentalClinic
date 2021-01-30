<template>
  <div class="container-fluid overlay bg-overlay">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-md-5 text-center">
          <h1 class="hfonte mb-3 text-white">Experiência com DentalClinic</h1>
          <div class="d-flex">
            <p class="pfonte mb-5 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ac tristique nisi, vitae tristique felis.
              Pellentesque quis elementum magna.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="d-flex justify-content-center">
            <div class="d-flex col-lg-4 mx-2 areaTestimonial">
              <div class="col-md-3 my-3">
                <img
                  class="mx-2"
                  src="../../../src/assets/user_one.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="col-md-9 my-3 pfonteTestimonial">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                consectetur laudantium consequatur maiores porro, repellat fugit
                perspiciatis facere nam sit?

                <h4 class="my-2">Lorem Ipsum Dot</h4>
                <p>Especialista Geriatra</p>
              </div>
            </div>

            <div class="d-flex col-lg-4 mx-2 areaTestimonial">
              <div class="col-md-3 my-3">
                <img
                  class="mx-2"
                  src="../../../src/assets/user_two.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="col-md-9 my-3 pfonteTestimonial">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                consectetur laudantium consequatur maiores porro, repellat fugit
                perspiciatis facere nam sit?

                <h4 class="my-2">Lorem Ipsum Dot</h4>
                <p>Grife de Dentista</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pfonte {
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  display: center;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 2px 2px #777;
}
.pfonteTestimonial {
  color: #777;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  display: center;
  align-items: center;
  justify-content: center;
}
h4 {
  color: #222;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  display: center;
  align-items: center;
  justify-content: center;
}

.hfonte {
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  display: center;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  text-shadow: 1px 2px 2px #777;
}

img {
  width: 70px;
  height: 70px;
}

.areaTestimonial {
  background-color: rgb(233, 237, 241);
  box-shadow: 6px 6px 6px rgba(122, 122, 122, 0.2);
}

.overlay {
  margin-bottom: 10%;
  height: 600px;
}
.bg-overlay {
  background-image: url("../../../src/assets/garota_comprando.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  margin-top: 10%;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .hfonte {
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    display: center;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    text-shadow: 1px 2px 3px rgb(20, 20, 20);
  }

  .pfonte {
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    display: center;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 2px 3px #777;
  }
}
</style>