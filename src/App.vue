<template>
  <div id="app">
    
    <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
      <div
        :style="cursorCircle"
        class="g-cursor__circle"
      ></div>
      <div
        class="g-cursor__point"
        ref="point"
        :style="cursorPoint"
      ></div>
      <div
        class="g-cursor__point2"
        ref="point2"
        :style="cursorPoint2"
      ></div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

  </div>
</template>

<script>

export default {
  name: "App",
 
  data() {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      xGrandChild: 0,
      yGrandChild: 0,
      hover: false,
      hideCursor: true
    };
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild}px) translateY(${this.yChild}px) translateZ(0) translate3d(0, 0, 0);`
    },
    cursorPoint2() {
      return `transform: translateX(${this.xGrandChild}px) translateY(${this.yGrandChild}px) translateZ(0) translate3d(0, 0, 0);`
    }
  },
  methods: {
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(() => {
        this.xParent = e.clientX - 13;
        this.yParent = e.clientY - 13;
      }, 100);
      setTimeout(() => {
        this.xGrandChild = e.clientX;
        this.yGrandChild = e.clientY;
      }, 200);
    
    },
hide(){
  this.hideCursor = true;
},
show(){
  this.hideCursor = false;
}

  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
     document.addEventListener('mouseleave', this.hide );
     document.addEventListener('mouseenter', this.show);

     if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
        document.body.style.cursor="default";
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        document.body.style.cursor="default";
    }
  }
};

</script> 

<style lang="scss">


* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  
}
html {
  scroll-behavior: smooth;
 
}
::selection {
  background-color: rgb(207, 74, 74);
}

#app {
  font-family: "Exo 2", sans-serif;
  /* font-family: 'Roboto', sans-serif; */
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;
  background: linear-gradient(
    45deg,
    black,
    #0d0d0d,
    #090909,
    #121212,
    #212121,
    #303030
  );
  background-size: 400% 400%;
  animation: change 25s ease-in-out infinite;
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
body {
  overflow-y:overlay;
  overflow-x: hidden;
  cursor: none;
  
}
::-webkit-scrollbar {
  width: 14px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #e9e9e980;
  border-radius: 50px;
}

.g-cursor {
  &_hide {
    opacity: 0;
    position: fixed;
    transition: opacity 0.6s ease;
    width: 60px;
    height: 60px;
    transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  }
 

  &__circle {
    pointer-events: none;
    user-select: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 30px;
    height: 30px;
    //border: 1px solid whitesmoke;
    backdrop-filter: invert(1);
    opacity: 1;
    border-radius: 100%;
    z-index: 5555;
    backface-visibility: hidden;
    transition: opacity 0.6s ease;
  }

  &__point {
    top: 0;
    left: 0;
    position: fixed;
    width: 5px;
    height: 5px;
    pointer-events: none;
    user-select: none;
    border-radius: 100%;
    background: #dddddd;
    z-index: 55;
    backface-visibility: hidden;
    will-change: transform;
  }
  &__point2 {
    top: 0;
    left: 0;
    position: fixed;
    width: 5px;
    height: 5px;
    pointer-events: none;
    user-select: none;
    border-radius: 100%;
    background: #ff3838;
    z-index: 55;
    backface-visibility: hidden;
    will-change: transform;
  }
   &_hover {
      .g-cursor__circle {
        opacity: 1;
        transition: width .6s ease,
          height .6s ease,
          opacity .6s ease;
      }
    }

 
 
  }

  .fade-enter, .fade-leave-to{
transition: translateX(3em);
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active{
    transition: all .3s ease;
  }

  @media (max-width: 545px) {
  #app {
  font-family: "Exo 2", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;
  background: 
    #0d0d0d;

}
}
</style>
