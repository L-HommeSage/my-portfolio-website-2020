<template>
  <div class="square">

    <router-link
      to="/about"
      class="glichybtn"
    >
      <span class="link-inner">See more <span class="arrow" /></span>

    </router-link>

  </div>
</template>

<style  scoped>
.square {
  height: 52px;
  width: 220px;
  padding: 1px;
  position: relative;
  height: 50px;
  display: flex;
  flex-direction: row;
  font-family: "Playfair Display", serif;
  align-items: center;
  justify-content: center;
}
.whitesquare {
  background-color: white;
  height: 50px;
  width: 220px;
  animation: glitchy 1s linear infinite;
}

.glichybtn {
  background: #000;
  color: #fff;
  font-size: 20px;
  letter-spacing: 0.02em;
  text-decoration: none;
  z-index: 0;
}
.glichybtn:hover::after {
  content: "";
  position: absolute;
  background: linear-gradient(45deg, #217EFA, #01F7C1);
  width: 100%;
  height: 100%;
  transform: scale(1.01);
  z-index: -1;
  background-size: 300%;
  animation: animation 2s linear infinite;
}
@keyframes animation {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.link-inner {
  display: flex;
  transform: translateY(0.5px);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50px;
  width: 220px;
  background-color: #000;
}

.glichybtn:hover:before {
  opacity: 1;
}

.glichybtn:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;

  left: 0;
  top: 0;
}

.glichybtn .arrow {
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.glichybtn .arrow::after {
  position: absolute;
  content: "\00bb";
  top: -13.5px;
  transition: 0.4s;
  opacity: 0;
}
.glichybtn:hover .arrow {
  padding-left: 20px;
}
.glichybtn:hover .arrow::after {
  opacity: 1;
}

@keyframes glitchy {
  0% {
    transform: translate(-2px, 2px);
  }
  25% {
    transform: translate(-2px, -2px);
  }
  50% {
    transform: translate(2px, 2px);
  }
  75% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(-2px, 2px);
  }
}
</style>
