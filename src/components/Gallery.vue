<template>
  <div class="gallery">

    <div class="container">
      <div class="clip clip1">
        <div class="content">
          <h3>
            Paris
          </h3>
          <p>
            Rare scene of Parisian life. Montmartre totally empty of its tourists and inhabitants. Confinement obliges.
          </p>
        </div>
      </div>
      <div class="clip clip2">
        <div class="content">
          <h3>
            Kyoto
          </h3>
          <p>
            I like to take pictures of paths, I don't know why. Maybe because I like to follow them all.
          </p>
        </div>
      </div>
      <div class="clip clip3">
        <div class="content">
          <h3>
            Seoul
          </h3>
          <p>
            City where one passes without transition from skyscrapers and modern neon lights to Buddhist temples, palaces and pagodas.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 30px;
}
.container {
  position: relative;
  width: 800px;
  height: 400px;
  border-radius: 8px;
  background: url("../assets/paris.jpg");
  background-position-y: 30%;
  background-size: cover;
  box-shadow: 0px 0px 61px -20px rgba(255, 255, 255, 0.7);
}

@media (max-width: 952px) {
  .container {
    width: 600px;
    height: 300px;
  }
}
@media (max-width: 858px) {
  .container {
    width: 500px;
    height: 250px;
  }
}
@media (max-width: 600px) {
  .container {
    box-shadow: 0px 0px 31px -28px rgba(255, 255, 255, 0.7);
  }
}
@media (max-width: 458px) {
  .container {
    width: 320px;
    height: 160px;
  }
}

.container .clip {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s;
}

.container .clip.clip1 {
  background: url("../assets/paris.jpg");
  background-position-y: 30%;
  background-size: cover;
  border-radius: 8px;
  clip-path: polygon(0 0, 55% 0, 20% 100%, 0% 100%);
}

.container .clip.clip2 {
  background: url("../assets/camino.jpg");
  background-position-y: 10%;
  background-size: cover;
  border-radius: 8px;
  clip-path: polygon(55% 0, 100% 0, 45% 100%, 20% 100%);
}

.container .clip.clip3 {
  background: url("../assets/seoul.jpg");
  background-position-y: 30%;
  background-size: cover;
  border-radius: 8px;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 45% 100%);
}

.container:hover .clip {
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
}

.container .clip:hover {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  transform: scale(1.2);
  z-index: 1;
}

.container .clip .content {
  position: absolute;

  bottom: -50px;
  left: 0;
  width: 70%;
  padding: 10px;
  background: rgba(4, 5, 4, 0.8);
  opacity: 0;
  border-radius: 0 8px 0 8px;
  transition: 0.3s;
  text-align: left;
}
.container .clip:hover .content {
  bottom: 0;
  opacity: 1;
}
.container .clip:hover .content:hover {
  bottom: 0;
  opacity: 0;
}
</style>
