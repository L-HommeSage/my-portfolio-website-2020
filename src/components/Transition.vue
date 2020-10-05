<template>
    <div class="transition" :style="Zindex">

        <div class="anim"> </div>
        <div class="anim"></div>
        <div class="anim"></div>
        <div class="anim"></div>
        <div class="anim"></div>
        <div class="anim"></div>
        <div class="anim"></div>
        <div class="anim"></div>
        <div class="bla"></div>
        <div class="first"></div>
<h1 :title="name">{{name}}</h1>
    </div>
</template>

<script>
export default {

    props:['name'],
    data() {
    return {
      z_index: 10,
    
    };
  },
    computed:{
Zindex(){
    return  `z-index:${this.z_index};`
}
    },
    mounted(){
        setTimeout(() => {
       this.z_index = -10
      }, 3500);
    }

}
</script>

<style scoped>
.transition{
     display: flex;
     flex-direction: column;
    height: 100vh;
    width: 100vw;

    position: fixed;
    background: #080808;
    text-align: center;
    justify-content: center;
    align-items: center;
    animation: transition 1s ease;
    animation-delay: 2.5s;
}
.first{
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background-color: #0f0f0f;
    animation: transition3 3.5s  linear;
    animation-delay: 0.2s; 

}

h1{
    position: absolute;
    margin-left: auto;
    font-size: 60px;
     font-family: "Playfair Display", serif;
    margin-top: auto;
    animation: glitch 1s linear infinite;
}
@keyframes glitch{
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
}
h1:before,
h1:after{
  content: attr(title);
  position: absolute;
  left: 0;
}

h1:before{
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop{
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}

h1:after{
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}
.bla{
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: -100vw;
    backdrop-filter: blur(4px);
    background-color: #00000015;
     animation: transition2 1.7s  linear;
    animation-delay: 1.5s; 

}
.anim{
width: 300px;
height: 30px;
margin: 10px;
background: crimson;
transform: skew(-4deg,-4deg);
transition: 0.3;
animation: animate 1s linear infinite;
opacity: 0;
}
.anim:nth-child(1){
animation-delay: 0.9s;
}
.anim:nth-child(2){
    animation-delay: 0.8s;
    height: 10px;
}
.anim:nth-child(3){
    animation-delay: 0.7s;
}
.anim:nth-child(4){
    animation-delay: 0.6s;
    height: 20px;
}
.anim:nth-child(5){
    animation-delay: 0.5s;
    height: 25px;
}
.anim:nth-child(6){
    animation-delay: 0.4s;
}
.anim:nth-child(7){
    animation-delay: 0.3s;
    height: 10px;
}
.anim:nth-child(8){
    animation-delay: 0.2s;
    
}
@keyframes transition {
    from{
        transform: translateX(0);
     
    }
      to{
        transform: translateX(-100vw);
        
    }

}
@keyframes transition2 {
    0%{
        transform: translateX(0vw);
       
    }
      30%{
        transform: translateX(100vw);
        
        
    }
    100%{
        transform: translateX(100vw);
    }
    

}
@keyframes transition3 {
    0%{
        transform: translateX(0vw);
       
    }
      15%{
        transform: translateX(100vw);
        
        
    }
    100%{
        transform: translateX(100vw);
        opacity: 0;
    }
    

}

@keyframes animate {

0%{
    background: #dd2a7b;
    transform: translateX(200px) skew(-4deg,-4deg);
    width: 200px;
    opacity: 0;
}
2%{
    opacity: 1;
}
25%{
    background: yellow;
    transform: translateX(100px) skew(-4deg,-4deg);
    
}
50%{
    background: whitesmoke;
    transform: translateX(0px) skew(-4deg,-4deg);
    
}
75%{
    background: #0ff;
    transform: translateX(-100px) skew(-4deg,-4deg);
    opacity: 1;
    
}
90%{
    width: 0px;
    transform: translateX(-190px) skew(-4deg,-4deg);
     opacity: 0;
}
100%{
    background: greenyellow;
    transform: translateX(-200px) skew(-4deg,-4deg);
    width: -10px;
     opacity: 0;
   
}
    
}
</style>