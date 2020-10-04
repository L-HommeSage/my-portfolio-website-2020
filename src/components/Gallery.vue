<template>
  <div class="gallery">

    <div class="container">
      <div class="clip clip1">
        <div class="content">
          <h2>
            Post Title 1
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Temporibus, tenetur!
          </p>
        </div>
      </div>
      <div class="clip clip2">
        <div class="content">
          <h2>
            Post Title 2
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Temporibus, tenetur!
          </p>
        </div>
      </div>
      <div class="clip clip3">
        <div class="content">
          <h2>
            Post Title 3
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Temporibus, tenetur!
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
  background: url("https://picsum.photos/800/500?random=1");
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
  background: url("https://picsum.photos/800/500?random=1");
  background-size: cover;
  border-radius: 8px;
  clip-path: polygon(0 0, 55% 0, 20% 100%, 0% 100%);
}

.container .clip.clip2 {
  background: url("https://picsum.photos/800/500?random=2");
  background-size: cover;
  border-radius: 8px;
  clip-path: polygon(55% 0, 100% 0, 45% 100%, 20% 100%);
}

.container .clip.clip3 {
  background: url("https://picsum.photos/800/500?random=3");
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
  padding: 20px;
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
</style>
