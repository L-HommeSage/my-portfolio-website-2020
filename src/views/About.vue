<template>
  <div class="about">
    <Particules />
    <FadeImage />
    <Message />
    <Space />
    <Grid
      data-aos="fade-up-right"
      data-aos-duration="5000"
    />
    <Projects />
    <Drawings/>
    <Space />
    <Gallery
      data-aos="fade-up-left"
      data-aos-duration="3000"
    />
    <FinalPanel/>
    <Footer />

  </div>
</template>

<script>
import FadeImage from "@/components/FadeImage.vue";
import Message from "@/components/Message.vue";
import Space from "@/components/Space.vue";
import Particules from "@/components/Particules.vue";
import Gallery from "@/components/Gallery.vue";
import Projects from "@/components/Projects.vue";
import Drawings from "@/components/Drawings.vue";
import FinalPanel from "@/components/FinalPanel.vue";
import Grid from "@/components/Grid.vue";
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
    Message
  },
};
</script>

<style lang="css" scoped>
.about {
  overflow: hidden;
}
</style>
