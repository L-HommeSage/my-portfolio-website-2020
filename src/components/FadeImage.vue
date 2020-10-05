<template>
     <header>
         
     <div id="picheader" :style="Fade" /> 
     <div class="scrolldown" :style="Fade">
       <span></span>
        <span></span>
         <span></span>
     </div>
     </header>
</template>

<script>
export default {
    data() {
    return {
      opacity: 1,
      
    };
  },
     computed: {
    Fade() {
      return `opacity: ${this.opacity};`
    },
  },
  methods: {
    scrollfade() {
//         var lastScrollTop = 0;
//     var st = window.pageYOffset || document.documentElement.scrollTop;
//      if (st > lastScrollTop){
//      if(window.pageYOffset> 600 ){
//  this.opacity = 1 - window.pageYOffset/600
//      }
//    } else {
//      this.opacity = 1 - window.pageYOffset/600
//    }

this.opacity = 1 - ((window.pageYOffset/700)*(window.pageYOffset/700)*(window.pageYOffset/700)*(window.pageYOffset/700))
     
    
        
      
      //this.top= 1 - window.pageYOffset
    }
  },
    mounted(){
      document.addEventListener("scroll", this.scrollfade);
    }
}
</script>


<style  scoped>
header{
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: relative;
}

header #picheader{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    background: url('../assets/Kyotorouge.jpg');
    background-size: cover;
    background-position-x: 50%;
  background-position-y: 50%;
}
.scrolldown{
  position: fixed;
  bottom: 20px;
  left: 50%;
  width: 30px;
  height: 30px;
 
  transform: translateY(-40px) translateX(-50%) rotate(45deg);

}

.scrolldown span{
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-bottom: 4px solid #ffffff;
   border-right: 4px solid #ffffff;
   animation: animate 1.5s linear infinite;
   opacity: 0;

}
.scrolldown span:nth-child(1){
transform: translate(-8px,-8px);
animation-delay: -0.4s;
}.scrolldown span:nth-child(2){
  /* border-bottom: 2px solid yellow;
   border-right: 2px solid yellow; */
   transform: translate(0px,0px);
   animation-delay: -0.2s;
}
.scrolldown span:nth-child(3){
 transform: translate(8px,8px);
 animation-delay: 0s;
}
@keyframes animate {
  0%{
top:-5px;
left: -5px;
opacity: 0;
  }
   25%{
top:0px;
left: 0px;
opacity: 1;
  }
   50%, 100%{
top:5px;
left: 5px;
opacity: 0;
  }
}
</style>