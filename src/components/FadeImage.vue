<template>
     <header>
         
     <div id="picheader" :style="Fade" /> 
     
     </header>
</template>

<script>
export default {
    data() {
    return {
      opacity: 1,
      
     // top: -100,
      
    };
  },
     computed: {
    Fade() {
      return `opacity: ${this.opacity}; top:${this.top}px;`
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
    width: 100%;
    background: url('../assets/Kyotorouge.jpg');
    background-size: cover;
    background-position-x: 50%;
  background-position-y: 50%;
}
</style>