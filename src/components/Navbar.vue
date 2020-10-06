<template>
  <div id="nav">
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
      <div class="menu_bar" />
      <div class="menu_bar" />
      <div class="menu_bar" />
    </label>
    <router-link to="/" class="name">
    PABLO ANTONIADIS</router-link>
    <ul>
      
      <li @click="scrollTo('cv')"><a >About</a></li>
      <li @click="scrollTo('projects')"><a >Projects</a></li>
      <li @click="scrollTo('drawings')"><a >Drawings</a></li>
    </ul>
  </div>
</template>

<script>
export default {
     methods: { 
           scrollTo(id) {
                this.$emit('scrollTo',id);
           }
        }
}
</script>

<style scoped>
.menu_bar {
  height: 4px;
  width: 30px;
  margin: 4px;
  border-radius: 20px;
  background: red;
}

.checkbtn {
  font-size: 30px;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  margin-top: 23px;

  display: none;
}

#check {
  display: none;
}

#nav {
  position: fixed;
  width: 100vw;
  height: 80px;
  z-index: 2;
  background: linear-gradient( rgba(4, 5, 4, 0.7),rgba(4, 5, 4, 0.5),transparent);
}
.name {
  font-size: 35px;
  line-height: 75px;
  padding: 0 20px;
  font-weight: bold;
  color: whitesmoke;
   border-radius: 4px;
   transition: 0.6s;
}
#nav ul {
  float: right;
  margin-right: 20px;
}

#nav ul li {
  display: inline-block;
  line-height: 65px;
  
}

#nav ul li a {
  font-weight: bold;
  border-radius: 4px;
  padding: 7px 13px;
  font-size: 20px;
  color: whitesmoke;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.6s;
}

a.active,
a:hover {
  transition: 0.6s;
  background: #040504;
}

@media (max-width: 952px) {
  .name {
    font-size: 30px;
    padding-left: 15px;
  }
  #nav ul li a {
    font-size: 16px;
  }
}

@media (max-width: 730px) {
  
.name {
    font-size: 20px;
    padding-left: 15px;
  }
  .checkbtn {
    display: block;
  }
  ul {
    position: fixed;
  
    width: 100%;
    height: 100vh;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }
  #nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }

  #nav ul li a{
      font-size: 25px;
  }

  
  a:hover,a.active {
    background: none;
    color: #f8bb2a;
  }

  #check:checked ~ ul {
    left: 0;
      background: #212529;
  }
}
@media (max-width: 380px) {
  .name {
    font-size: 16px;
    padding-left: 15px;
  }
}
</style>
