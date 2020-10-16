<template>
  <div>
    <div class="projects">
      <div style="height:200px" />
      <div
        class="imgbox imageScroll "
        :style="GoUp"
      />

      <div class="text">
        <h1>PROJECTS :</h1>
        <p>Kanpai<br>2019 - <br>My 4 friends and I for our graduation project. We decided to develop a mobile application on sake. In Europe, interest in sake is growing strongly. Like Vivino we want to provide sake enthusiasts with all the information about any sake in their hand. For this project I take care of the UI and UX part as well as part of the backend. The project is developed in Flutter and Firebase.</p>
        <p>Machine learning project<br>2020<br>After having scraped all the results of the football league 1 on <a
            class="maxifoot"
            href="http://www.maxifoot.fr/calendrier-ligue-1-france.htm"
            data-content="maxifoot.fr"
          >maxifoot.fr</a>. I applied my machine learning knowledge learned in class to predict the matches of the 2019-2020 season. I used classification algorithms to predict if a match ended in victory, defeat or draw. I tried Logistic regression, Support Vector Machines and Random Forest which got 47% accuracy. I will have to keep eating pasta this month. You can take a look at my project here: <a
            class="Colab"
            href="https://colab.research.google.com/drive/1YvNBcGHgS3TlJS2xwLu-JBRdB9X9usj6?usp=sharing"
            data-content="Colab"
          >Colab</a>.</p>
        <p>Flappy Bird AI<br>2019<br>Rebuilt the game Flappy Bird and implemented an IA using first Pytorch and then NEAT. Coded in Python with pygame package. I learned the basics of neural networks while working on this project.</p>
        <p style="width:70%">Conway's game of life<br>2018<br>
          Reproduction of the famous <a
            class="Conway"
            href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
            data-content="Conway's game of life"
          >Conway's game of life</a> from scratch. I did this project in C++. Thanks to this project I was able to master the concepts of object-oriented programming.</p>

      </div>
      <div
        class="imgbox imageKanpai1 "
        :style="GoUp2"
      />
      <div
        class="imgbox imageKanpai2 "
        :style="GoUp3"
      />
      <div
        class="imgbox imageKanpai3 "
        :style="GoUp4"
      />

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      top: 220,
      top2: 200,
      top3: 190,
      top4: 215,
      lastScrollTop: 0,
      windowWidth: window.width,
    };
  },
  computed: {
    GoUp() {
      return `transform: matrix(1, 0, 0, 1, 0, ${this.top});`
    },
    GoUp2() {
      return `transform: matrix(1, 0, 0, 1, 0, ${this.top2});`
    },
    GoUp3() {
      return `transform: matrix(1, 0, 0, 1, 0, ${this.top3});`
    },
    GoUp4() {
      return `transform: matrix(1, 0, 0, 1, 0, ${this.top4});`
    },
  },

  methods: {
    scrollfade() {

      //   if (window.pageYOffset > 3100) {
      //     this.top = -60
      //   }
      if (window.pageYOffset < 100) {
        this.top = 220
        this.top2 = 220
      }
      else {
        // var st = window.pageYOffset;
        // if (st > this.lastScrollTop) {
        this.top = this.top + ((this.lastScrollTop - window.pageYOffset) / 7)
        this.top2 = this.top2 + ((this.lastScrollTop - window.pageYOffset) / 5.5)
        this.top3 = this.top3 + ((this.lastScrollTop - window.pageYOffset) / 5)
        this.top4 = this.top4 + ((this.lastScrollTop - window.pageYOffset) / 6)
        // } else {


        //   this.top = this.top + window.pageYOffset / 1000
        // }
      }



      this.lastScrollTop = window.pageYOffset




    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrollfade);
    if (this.windowWidth < 550) {
      this.top3 = 700
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  position: relative;
  font-family: "Playfair Display", serif;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0.2em;
  line-height: 1.6;
  padding-top: 40px;
  margin-bottom: 1.5em;
}

p {
  margin-bottom: 2.5em;
  letter-spacing: 0.05em;
  font-size: 14px;
  text-align: justify;
}
.projects {
  width: 800px;
  margin-left: auto;
  margin-bottom: 180px;
  margin-right: auto;
  font-size: 14px;
  display: block;
}
.text {
  position: relative;
  background: #111;
  color: #fff;
  padding: 60px 180px 160px 60px;
  width: 775px;
  box-sizing: border-box;
  margin-left: -60px;
  letter-spacing: 0.1em;
}
.imageScroll {
  position: absolute;
  right: 180px;
  width: 300px;
  height: 700px;
  background-image: url("../assets/Chats.png");
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: cover;
  transition-duration: 1s, 1s;
  transition-timing-function: cubic-bezier(0, 0.995, 0.995, 1),
    cubic-bezier(0, 0.995, 0.995, 1);
  -webkit-font-smoothing: antialiased;
}
.imageKanpai1 {
  position: absolute;
  right: 100px;
  z-index: 1;
  border-radius: 8px;
  width: 200px;
  height: 400px;
  background-image: url("../assets/Kanpai1.jpg");
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: cover;
  transition-duration: 1s, 1s;
  transition-timing-function: cubic-bezier(0, 0.995, 0.995, 1),
    cubic-bezier(0, 0.995, 0.995, 1);
  -webkit-font-smoothing: antialiased;
}
.imageKanpai2 {
  position: absolute;
  right: 320px;
  z-index: 1;
  border-radius: 8px;
  width: 200px;
  height: 400px;
  background-image: url("../assets/Kanpai2.jpg");
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: cover;
  transition-duration: 1s, 1s;
  transition-timing-function: cubic-bezier(0, 0.995, 0.995, 1),
    cubic-bezier(0, 0.995, 0.995, 1);
  -webkit-font-smoothing: antialiased;
}
.imageKanpai3 {
  position: absolute;
  right: 540px;
  z-index: 2;
  border-radius: 8px;
  width: 200px;
  height: 400px;
  background-image: url("../assets/Kanpai3.jpg");
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: cover;
  transition-duration: 1s, 1s;
  transition-timing-function: cubic-bezier(0, 0.995, 0.995, 1),
    cubic-bezier(0, 0.995, 0.995, 1);
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
}

.Conway {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #ff3838;
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
    color: #fff;
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
.Colab {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #ff3838;
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
    color: #fff;
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
.maxifoot {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #ff3838;
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
    color: #fff;
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
@media (max-width: 545px) {
  .text {
    position: relative;
    background: #fff;
    color: #111;
    padding: 60px 180px 160px 60px;
    width: 475px;
    box-sizing: border-box;
    margin-left: -20px;
    letter-spacing: 0.1em;
  }
  .imageScroll {
    position: absolute;
    right: 0px;
    width: 130px;
    height: 500px;
    z-index: 2;
    background-image: url("../assets/Chats.png");
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: cover;
    transition-duration: 1s, 1s;
    transition-timing-function: cubic-bezier(0, 0.995, 0.995, 1),
      cubic-bezier(0, 0.995, 0.995, 1);
    -webkit-font-smoothing: antialiased;
  }
  .imageKanpai1 {
    display: none;
  }
  .imageKanpai2 {
    position: absolute;
    right: 20px;
    z-index: 1;
    border-radius: 8px;
    width: 180px;
    height: 380px;
    background-image: url("../assets/Kanpai2.jpg");
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: cover;
    transition-duration: 1s, 1s;
    transition-timing-function: cubic-bezier(0, 0.995, 0.995, 1),
      cubic-bezier(0, 0.995, 0.995, 1);
    -webkit-font-smoothing: antialiased;
  }
  .imageKanpai3 {
    display: none;
  }
  h1 {
    font-size: 30px;
  }

  .projects {
    overflow-x: hidden;
  }
}
</style>