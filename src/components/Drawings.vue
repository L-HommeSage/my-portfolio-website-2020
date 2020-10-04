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

        <li  data-aos="fade-up-right" v-on:click="window.location.href('https://www.instagram.com/p/CF1yoGBok7K/');">
        <a href="https://www.instagram.com/p/CF1yoGBok7K/"></a></li>
        <li data-aos="fade-up" ><a href="https://www.instagram.com/p/B8Uj6JtI61F/"
         
          ></a></li>
        <li  data-aos="fade-up-left" ><a href="https://www.instagram.com/p/B2FARxGhN-B/"
        
          ></a></li>
        <li  data-aos="fade-up-right" ><a href="https://www.instagram.com/p/B9nDQpnoL9B/"
           
          ></a></li>
        <li  data-aos="fade-up" ><a href="https://www.instagram.com/p/B6oY-vuIV1S/"
            
          ></a></li>
        <li  data-aos="fade-up-left" ><a href="https://www.instagram.com/p/B9nDLgYIljv/"
           
          ></a></li>
        <li  data-aos="fade-up-right" ><a href="https://www.instagram.com/p/B2E9ZQOheJM/"
        
          ></a></li>
        <li  data-aos="fade-up" ><a href="https://www.instagram.com/p/CFI--XSjAUt/"
        
          ></a></li>
        <li  data-aos="fade-up-left" ><a href="https://www.instagram.com/p/B2HFqn8Bbx3/"
         
          ></a></li>
      </ul>

    </div>

  </div>
</template>

<style lang="scss" scoped>
.block {
  width: 700px;
  margin-left: auto;
  margin-bottom: 180px;
  margin-top: 180px;
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
  background-image: url("../assets/bg.jpg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  
}
.instagram ul li:nth-child(1){
    background-image: url("../assets/geisha.png");
}
.instagram ul li:nth-child(2){
    background-image: url("../assets/tigre.png");
}
.instagram ul li:nth-child(3){
    background-image: url("../assets/mask.png");
}
.instagram ul li:nth-child(4){
    background-image: url("../assets/suzette.png");
}
.instagram ul li:nth-child(5){
    background-image: url("../assets/look.png");
}
.instagram ul li:nth-child(6){
    background-image: url("../assets/enio.png");
}
.instagram ul li:nth-child(7){
    background-image: url("../assets/lio.png");
}
.instagram ul li:nth-child(8){
    background-image: url("../assets/Koi.png");
}
.instagram ul li:nth-child(9){
    background-image: url("../assets/samu.png");
}

.instagram ul li:hover {
  transform: scale(1.3);
  z-index: 1;
}

 .instagram ul:hover li:not(:hover) {
     opacity: 0.5;  
 }


a {
  text-decoration: none;
  color: #fff;
  outline: none;
  
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
  top: -100px;
  z-index: 0;
  // animation: increase 30s linear 10ms infinite;
  // transition: all 0.2s ease-in-out;
}
.bg {
  background-image: url("../assets/bg.jpg");
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
    transform: scale(1.5);
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
  background-image: url("../assets/Koi.png");
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>