<template>
  <div class="message_link">
    <div class="double_door cf">
      <div class="outer_t" data-aos="fade-up-right">
        <a
           href="mailto:antoniadis.pablo@gmail.com"
          
        >
          <div class="btn from-center">Contact me<span class="arrow" /></div>
        </a>
      </div>
      <div class="outer_t" data-aos="fade-up-left">
        <a
          href="https://github.com/L-HommeSage/my-portfolio-website-2020"
       
        >
          <div class="btn from-center">Review code<span class="arrow" /></div>
        </a>
      </div>
    </div>
    <div class="center_l"/>
  </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.message_link {
  position: relative;
}
.double_door {
  margin-bottom: 200px;
}
.double_door > div {
  float: left;
  width: 50%;
  height: 440px;
  text-align: center;
  font-family: "Playfair Display", serif;
  font-size: 28px;
  letter-spacing: 0.2em;
  padding: 0 100px;
  
}
.btn {
  position: relative;
  padding: 1.4rem 4.2rem;
  padding-right: 3.1rem;
  font-size: 1.4rem;
  color: #fff;
  letter-spacing: 1.1rem;
  text-transform: uppercase;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  user-select: none;
}
.btn:before,
.btn:after {
  content: "";
  position: absolute;
  transition: inherit;
  z-index: -1;
}

.btn:hover {
  color: #ff3838;
  transition-delay: 0.5s;
}

.btn:hover:before {
  transition-delay: 0s;
}

.btn:hover:after {
  /* background: white; */
  background-size: cover;
  transition-delay: 0.35s;
}
.btn .arrow {
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.btn .arrow::after {
  position: absolute;
  content: "\00bb";
  top: -25.5px;
  transition: 0.4s;
  opacity: 0;
}
.btn:hover .arrow {
  padding-left: 10px;
}
.btn:hover .arrow::after {
  opacity: 1;
}
.from-center:before {
	top: 0;
	left: 50%;
	height: 100%;
	width: 0;
	border: 1px solid #fff;
	border-left: 0;
	border-right: 0;
}

.from-center:after {
	bottom: 0;
	left: 0;
	height: 0;
	width: 100%;
	
}

.from-center:hover:before {
	left: 0;
	width: 100%;
}

.from-center:hover:after {
	top: 0;
	height: 100%;
}
.double_door a {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.center_l {
  position: absolute;
  right: 50%;
  top: -150px;
  width: 1px;
  height: 400px;
  background: #fff;
  opacity: 0.1;
}
</style>