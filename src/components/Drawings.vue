<template>
  <div>
    <div class="draw_center">
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-center"
      >Drawings</h2>
    </div>
    <div class="imgbg">
      <div class="bg"></div>
    </div>
    <div class="block instagram">

      <ul class="cf">

        <li
          data-aos="fade-up-right"
          v-on:click="clicked('a1')"
        >
          <a
            id="a1"
            href="https://www.instagram.com/p/CF1yoGBok7K/"
          ></a>
        </li>
        <li
          data-aos="fade-up"
          v-on:click="clicked('a2')"
        ><a
            id="a2"
            href="https://www.instagram.com/p/B8Uj6JtI61F/"
          ></a></li>
        <li
          data-aos="fade-up-left"
          v-on:click="clicked('a5')"
        ><a
            id="a5"
            href="https://www.instagram.com/p/B2FARxGhN-B/"
          ></a></li>
        <li
          data-aos="fade-up-right"
          v-on:click="clicked('a3')"
        ><a
            id="a3"
            href="https://www.instagram.com/p/B9nDQpnoL9B/"
          ></a></li>
        <li
          data-aos="fade-up"
          v-on:click="clicked('a4')"
        ><a
            id="a4"
            href="https://www.instagram.com/p/B6oY-vuIV1S/"
          ></a></li>
        <li
          data-aos="fade-up-left"
          v-on:click="clicked('a6')"
        ><a
            id="a6"
            href="https://www.instagram.com/p/B9nDLgYIljv/"
          ></a></li>
        <li
          data-aos="fade-up-right"
          v-on:click="clicked('a7')"
        ><a
            id="a7"
            href="https://www.instagram.com/p/B2E9ZQOheJM/"
          ></a></li>
        <li
          data-aos="fade-up"
          v-on:click="clicked('a8')"
        ><a
            id="a8"
            href="https://www.instagram.com/p/B8cBHFoorEv/"
          ></a></li>
        <li
          data-aos="fade-up-left"
          v-on:click="clicked('a9')"
        ><a
            id="a9"
            href="https://www.instagram.com/p/B2HFqn8Bbx3/"
          ></a></li>
      </ul>

    </div>

  </div>
</template>

<script>
export default {
  methods: {
    clicked(id) {
      document.getElementById(id).click();
    }

  }
}
</script>

<style lang="scss" scoped>
.block {
  width: 700px;
  margin-left: auto;
  margin-bottom: 180px;
  margin-top: 150px;
  margin-right: auto;
  font-size: 14px;
}
.instagram ul li {
  width: 32.3%;
  padding-bottom: 28%;
  float: left;
  margin: 2px;
  list-style: none;
  position: relative;
  background-image: url("../assets/Bg.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.instagram ul li:nth-child(1) {
  background-image: url("../assets/Geisha.png");
}
.instagram ul li:nth-child(2) {
  background-image: url("../assets/Tigre.png");
}
.instagram ul li:nth-child(3) {
  background-image: url("../assets/Mask.png");
}
.instagram ul li:nth-child(4) {
  background-image: url("../assets/Suzette.png");
}
.instagram ul li:nth-child(5) {
  background-image: url("../assets/Look.png");
}
.instagram ul li:nth-child(6) {
  background-image: url("../assets/Enio.png");
}
.instagram ul li:nth-child(7) {
  background-image: url("../assets/Lio.png");
}
.instagram ul li:nth-child(8) {
  background-image: url("../assets/Chica.png");
}
.instagram ul li:nth-child(9) {
  background-image: url("../assets/Samu.png");
}

.instagram ul li:hover {
  transform: scale(1.3);
  z-index: 1;
}

.instagram ul:hover li:not(:hover) {
  opacity: 0.5;
}

h2 {
  color: #ff3838;
  font-family: "Playfair Display", serif;
  font-size: 45px;
  position: relative;
  top: -10px;
  background-color: rgba(245, 245, 245, 0.8);
  padding: 20px;
}
.imgbg {
  // background-image: url("../assets/bg.jpg");
  // background-position-x: 50%;
  // background-position-y: 68.6%;
  width: 100%;
  transform: scaleX(-1);
  height: 50vh;
  position: relative;
  overflow: hidden;
  opacity: 0.9;
  top: -110px;
  z-index: 0;
  // animation: increase 30s linear 10ms infinite;
  // transition: all 0.2s ease-in-out;
}
.bg {
  background-image: url("../assets/Bg.jpg");
  background-position-x: 50%;
  background-position-y: 68.6%;
  animation: increase 40s linear 10ms infinite;
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 100%;
}
@keyframes increase {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.7);
  }
  100% {
    transform: scale(1);
  }
}
.draw_center {
  height: 400px;
  width: 400px;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-image: url("../assets/Koi1.png");
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 545px) {
  .block {
    width: 100vw;
    margin-left: auto;
    margin-bottom: 50px;
    margin-top: 150px;
    margin-right: auto;
    font-size: 14px;
  }
  .instagram ul li {
    width: 32%;
    margin: 1px;
    padding-bottom: 28%;
    left: 1.5%;
    list-style: none;
    position: relative;
    background-image: url("../assets/Bg.jpg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .draw_center {
    overflow-x: hidden;
  }
}
</style>