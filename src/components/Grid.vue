<template>
  <div class="grid">
    <div class="container">
      <div
        class="box"
        data-aos="fade-up-right"
      >
        <div class="content">
          <div class="profil">
            <img
              class="profilpic"
              src="../assets/profilepic.jpg"
            />
            <p>As part of my studies as a software enginner at
              ECE Paris, I am looking for a 6-month internship from February
              2021.</p>
          </div>
        </div>
      </div>
      <div
        class="box"
        data-aos="fade-up-left"
      >
        <div class="content">
          <p><span>Programming skills:</span> <br />HTML/CSS, Vue.js, Flutter, Python, C#/unity
          </p>
        </div>
      </div>
      <div
        class="box"
        data-aos="fade-up-left"
      >
        <div class="content">
          <p><span> Professional experiences:</span><br /><br /> Software engineer intern at Nekologic (LLC), Kyoto, Japan
            <br /><small>April 2020 - September 2020</small><br /><br />
            Mobile development consultant at JEECE (junior enterprise of
            ECE), Paris, France<br />
            <small>January 2020 - April 2020</small><br /><br />
            Web-marketing communication assistant at Speos Paris Photographic
Institute, Paris, France<br />
<small>January 2019 - March 2019</small>
<br /><br /><br /><br /> <a class="link" data-content="Want to know more?" href="https://www.linkedin.com/in/pablo-antoniadis-869773189">Want to know more?</a>
          </p>
        </div>
      </div>
      <div
        class="box"
        data-aos="fade-up-right"
      >
        <div class="content">
          <div class="drawpanel">
            <p>I like to draw</p>
          </div>

        </div>
      </div>
      <div
        class="box"
        data-aos="fade-up-right"
      >
        <div class="content">
          <p><span>Languages:</span><br /> French (native), Spanish (native), English (professional)</p>
        </div>
      </div>
      <div
        class="box"
        data-aos="fade-up-left"
      >
        <div class="content">
          <p><span>Education:</span><br /><br />Ecole Centrale d'Electronique - ECE, Paris<br /><small>September 2016 - February 2021</small>
          <br /><br />Keimyung University, Daegu, South Korea<small><br /> September 2018 — January 2019</small>
           <br /><br />Lycée Racine, Paris, France<small><br />September 2013 - June 2016</small></p>
        </div>
      </div>
      <div
        class="box"
        data-aos="fade-up-right"
      >
        <div class="content">
          <p><span>Other interest:</span><br />
Hiking, guitar (5 years), fencing (9 years), archery (3 years)</p>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.profil {
  display: flex;
  flex-direction: row;
  place-items: center;
}
.profilpic {
  height: 150px;
  width: 150px;
  border-radius: 8px;
  margin-right: 10px;
}


.grid {
  display: flex;
  justify-content: center;
  align-self: center;
  min-height: 95vh;
  padding: 40px 40px 0px 40px;
}
small{
  color: #858585;
}
span{
  color: #ff3838;
}
.container {
  position: relative;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: minmax(100px, auto);
  margin: 40px;
  grid-auto-flow: dense;
  grid-gap: 10px;
}
.container .box {
  padding: 20px;
  display: grid;
  font-size: 20px;
  place-items: center;
  text-align: center;
  transition: 0.6s;
  background-position: center;
  /* border-radius: 8px; */
}
.container .box:hover {
  /* background: linear-gradient(90deg, #383838 0%, #141414 100%); */
  background: #040504;
  transform: scale(1.12);
  z-index: 1;
  transition: 0.6s;
}
.drawpanel {
  height: 100%;
  width: 100%;
  opacity: 1;
  transition: 0.6s;
}

.container .box:nth-child(4):hover {
  background: url("../assets/city.png");
background-position: center;
  background-size: cover;
  opacity: 1;

}
.container .box:nth-child(4):hover .drawpanel {
  opacity: 0;
}

.container .box:nth-child(1) {
  grid-column: span 2;
  grid-row: span 1;
}
.container .box:nth-child(2) {
  grid-column: span 1;
  grid-row: span 1;
}
.container .box:nth-child(3) {
  text-align: left;
  grid-column: span 1;
  grid-row: span 3;
}

.container .box:nth-child(4) {
  grid-column: span 1;
  grid-row: span 2;

}
.container .box:nth-child(5) {
  grid-column: span 1;
  grid-row: span 1;
}
.container .box:nth-child(6) {
  text-align: left;
  grid-column: span 1;
  grid-row: span 2;
}
.container .box:nth-child(7) {
  grid-column: span 1;
  grid-row: span 1;
}
.link {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: rgb(160, 160, 160);
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

@media (max-width: 991px) {
  p {
    font-size: 12px;
  }
  .grid {
    padding: 40px 10px 0px 10px;
  }
  .profilpic {
    height: 80px;
    width: 80px;
    margin-right: 6px;
  }
  .container {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    grid-template-rows: minmax(auto, auto);
  }
  .container .box {
    grid-column: unset !important;
    grid-row: unset !important;
  }
}
</style>