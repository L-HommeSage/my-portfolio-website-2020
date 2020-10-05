<template>
  <div class="home">
    <Transition :name="'- Pablo Antoniadis -'"/>
    <Particules />
    <h1>PABLO <span style="color:red">ANTONIADIS</span></h1>

    <p>
      Hello. My name is Pablo, I'm an engineering student from France, based in
      Paris. I design and develop websites, mobile apps using flutter and in my
      spare time I draw. I can also help you with your cloud projects and
      analysing your datas. You can find me on social media such as;
      <a
        class="instagram"
        href="https://www.instagram.com/pabkoi/"
        data-content="Instagram"
        >Instagram</a
      >
      and
      <a
        class="LinkedIn"
        href="https://www.linkedin.com/in/pablo-antoniadis-869773189"
        data-content="LinkedIn"
        >LinkedIn</a
      >.
      <br />
      <br />
      Do you need help on a project, campaign or do you just want to say hello ?
      <a class="email" href="mailto:antoniadis.pablo@gmail.com" data-content="Contact me">Contact me</a>.
    </p>

    <GlichButton />
  </div>
</template>

<script>
import Particules from "@/components/Particules.vue";
import GlichButton from "@/components/glichButton.vue";
import Transition from "@/components/Transition.vue";
export default {
  name: "About",
  components: {
    Particules,
    GlichButton,
    Transition
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  letter-spacing: 0.15rem;
}

h1 {
  z-index: 1;
}
p {
  max-width: 500px;
  text-align: justify;
  margin: 40px;
  z-index: 1;
}



a {
  text-decoration: none;
}

.instagram {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #dd2a7b;
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
    color: #0ff;
    z-index: -1;
    opacity: 0;
  }

  &:after {
    color: #f22;
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
.email {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #27b245;
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
    color: #C5C5C5;
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
.LinkedIn {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #2766b2;
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
</style>
