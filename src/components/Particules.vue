<template>
<!-- <div > -->
  <!-- <div id="container">
<div class="box"/>
<div class="box"/>



  </div> -->
  <Particles
    id="tsparticles"
    :options="{
            fpsLimit: 60,
            interactivity: {
                detectsOn: 'canvas',
                events: {
                    onClick: {
                        enable: false,
                        mode: 'push'
                    },
                    onHover: {
                        enable: false,
                        mode: 'repulse'
                    },
                    resize: true
                },
                
            },
            particles: {
                color: {
                    value: ['#ffffff','#2766B2', '#27b245', '#DD2A7B']
                },
               
                collisions: {
                    enable: false
                },
                move: {
                    direction: 'top-right',
                    enable: true,
                    outMode: 'out',
                    random: false,
                    speed: 2.5,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800
                    },
                    value: 15
                },
                opacity: {
                    value: 0.6
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    random: true,
                    value: 1.2
                }
            },
            detectRetina: true
        }"
  />
  <!-- </div> -->
</template>
<script>
export default {
  // mounted(){

  //   setInterval(function(){
  //   var gooey = document.getElementsByClassName('box');
  //   for(var i = 0; i< gooey.length;i++){
  //     gooey[i].style.left = Math.floor(Math.random()*100)+'vw';
  //     gooey[i].style.top = Math.floor(Math.random()*100)+'vh';
  //   }},1000)
  // }
}
</script>

<style scoped>

/* #container{
    z-index: 6;
  pointer-events: none;
    
  position: fixed;
  height: 100vh;
  width: 100vw;
  filter: contrast(50); 
}
#container .box{
  position: absolute;
  height: 550px;
  width: 550px;
  background: rgba(0, 0, 0, 0.13);
  border-radius: 50%;
  filter: blur(100px);
  transition: 2s;
} */
#tsparticles {
  z-index: 5;
  pointer-events: none;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-size: 400% 400%;
  animation: change 25s ease-in-out infinite;
}
#tsparticles::after {
  content: "";
  position: absolute;
  width: 200vw;
  height: 200vh;
  left: -50%;
  top: -50%;
  background-image: url("http://assets.iceable.com/img/noise-transparent.png");
  animation: bg-animation 0.2s infinite;
  opacity: 0.65;
  visibility: visible;
}

@keyframes bg-animation {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -5%);
  }
  20% {
    transform: translate(-10%, 5%);
  }
  30% {
    transform: translate(5%, -10%);
  }
  40% {
    transform: translate(-5%, 15%);
  }
  50% {
    transform: translate(-10%, 5%);
  }
  60% {
    transform: translate(15%, 0);
  }
  70% {
    transform: translate(0, 10%);
  }
  80% {
    transform: translate(-15%, 0);
  }
  90% {
    transform: translate(10%, 5%);
  }
  100% {
    transform: translate(5%, 0);
  }
}

@keyframes change {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

@media (max-width: 545px) {
#tsparticles {
  z-index: 5;
  pointer-events: none;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-size: 100% 100%;
  animation: none;
}
#tsparticles::after {
  content: "";
  position: absolute;
  width: 200vw;
  height: 200vh;
  left: -50%;
  top: -50%;
  background-image: none;
  animation: none;
  opacity: none;
  visibility: visible;
}
}
</style>