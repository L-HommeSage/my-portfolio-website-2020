<template>

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
                    speed: 2,
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
                    value: 0.5
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
</template>

<style scoped>
#tsparticles{
    z-index: 5;
    pointer-events: none;
  position: fixed;
  height: 100vh;
  width: 100%;
   /* background:linear-gradient(-45deg,#0D0D0D,#090909,#121212,#212121);  */
  background-size: 400% 400%;
  animation: change 25s ease-in-out infinite;
}
#tsparticles::after {
  content:"";
  position: absolute;
  width:200vw;
  height: 200vh;
  left: -50%;
  top: -50%;
  background-image: url('http://assets.iceable.com/img/noise-transparent.png');
  animation: bg-animation .2s infinite;
  opacity: .65;
  visibility: visible;
}

@keyframes bg-animation {
    0% { transform: translate(0,0) }
    10% { transform: translate(-5%,-5%) }
    20% { transform: translate(-10%,5%) }
    30% { transform: translate(5%,-10%) }
    40% { transform: translate(-5%,15%) }
    50% { transform: translate(-10%,5%) }
    60% { transform: translate(15%,0) }
    70% { transform: translate(0,10%) }
    80% { transform: translate(-15%,0) }
    90% { transform: translate(10%,5%) }
    100% { transform: translate(5%,0) }
}

@keyframes change{
  0%{
    background-position: 0 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0 50%;
  }
}
</style>