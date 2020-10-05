<template>
  <div class="about">
    <Transition :name="'- Welcome -'" />
    <Navbar @scrollTo="scrollTo($event)" />
    <Particules />
    <FadeImage />
    <Message />
    <Space />
    <Grid id="cv" />
    <!-- data-aos="fade-up-right"
      data-aos-duration="5000" -->
    <Projects id="projects" />
    <Drawings id="drawings" />
    <Space />

    <Gallery
      data-aos="fade-up-left"
      data-aos-duration="3000"
    />
    <FinalPanel />
    <Footer />

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FadeImage from "@/components/FadeImage.vue";
import Message from "@/components/Message.vue";
import Space from "@/components/Space.vue";
import Particules from "@/components/Particules.vue";
import Gallery from "@/components/Gallery.vue";
import Projects from "@/components/Projects.vue";
import Drawings from "@/components/Drawings.vue";
import FinalPanel from "@/components/FinalPanel.vue";
import Grid from "@/components/Grid.vue";
import Transition from "@/components/Transition.vue";
import Footer from "@/components/Footer.vue"
export default {
  name: "About",
  components: {
    Gallery,
    Grid,
    Particules,
    FadeImage,
    Footer,
    Space,
    Projects,
    Drawings,
    FinalPanel,
    Message,
    Transition,
    Navbar
  },
  methods: {
    scrollTo(id) {
      var elmnt = document.getElementById(id);
      elmnt.scrollIntoView();
    }
  }
};
</script>

<style lang="css" scoped>
.about {
  overflow: hidden;
}
</style>
