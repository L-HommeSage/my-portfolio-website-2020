<template>
  <footer>
    <i
      class="toTopIcon"
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="1000"
      @click="scrollToTop"
    ><svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 172 172"
        style=" fill:#000000;"
      >
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style="mix-blend-mode: normal"
        >
          <path
            d="M0,172v-172h172v172z"
            fill="none"
          ></path>
          <g fill="#656565">
            <path d="M86,28.66667l-64.5,43v28.66667l64.5,-43l64.5,43v-28.66667zM86,74.35417l-64.5,43v28.66667l64.5,-43l64.5,43v-28.66667z"></path>
          </g>
        </g>
      </svg></i>
    <div class="divider" />
    <div class="links">
      <a
        data-aos="fade-up"
        data-aos-offset="0"
        data-content="Antoniadis Pablo"
        href="https://www.linkedin.com/in/pablo-antoniadis-869773189"
      >Antoniadis Pablo</a>

      <a
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="100"
        data-content="antoniadis.pablo@gmail.com"
        href="mailto:antoniadis.pablo@gmail.com"
      >antoniadis.pablo@gmail.com</a>
      <a
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="200"
        data-content="Tel. +33 7 87 97 02 89"
      >Tel. +33 7 87 97 02 89</a>

      <a
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="300"
        data-content="@pabkoi"
        href="https://www.instagram.com/pabkoi/"
      >@pabkoi</a>

    </div>
  </footer>

</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style lang="scss">
footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
  align-items: center;
}
.divider {
  height: 1px;
  width: 90%;
  background-color: #272727;
}
.spacer {
  width: 10%;
}
.links {
  display: flex;
  width: 90%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  color: #656565;
  font-size: 12px;
}
a {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #656565;
  z-index: 1;

  &:before,
  &:after {
    content: attr(data-content);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:before {
    color: #00adad;
    z-index: -1;
    opacity: 0;
  }

  &:after {
    color: #ff00ff;
    z-index: -2;
    opacity: 0;
  }

  &:hover {
    color: rgb(197, 197, 197);
    &:before {
      animation: glitchy 0.3s ease 0.3s infinite;
      opacity: 1;
    }

    &:after {
      animation: glitchy 0.3s ease infinite reverse;
      opacity: 1;
    }
  }
}
.toTopIcon {
  margin-bottom: 10px;
}
@keyframes glitchy {
  0% {
    transform: translate(-1.5px, -1.5px);
  }
  25% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(-1.5px, -1.5px);
  }
  75% {
    transform: translate(0px, -1.5px);
  }
  100% {
    transform: translate(-1.5px, 0px);
  }
}

@media (max-width: 600px) {
  .links {
    flex-direction: column;
    justify-content: space-evenly;
    margin: 4px;
  }
  footer {
    height: 200px;
  }
}
</style>