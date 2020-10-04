<template>
  <div id="nav">
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
      <div class="menu_bar" />
      <div class="menu_bar" />
      <div class="menu_bar" />
    </label>
    <label class="name">PABLO ANTONIADIS</label>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about" >About</router-link></li>
      <li><a>Projects</a></li>
      <li><a>Drawings</a></li>
    </ul>
  </div>
</template>

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
  width: 100%;
  height: 80px;
  z-index: 2;
  background: linear-gradient( rgba(4, 5, 4, 0.7),rgba(4, 5, 4, 0.5),transparent);
}

label.name {
  font-size: 35px;
  line-height: 75px;
  padding: 0 20px;
  font-weight: bold;
}
#nav ul {
  float: right;
  margin-right: 20px;
}

#nav ul li {
  display: inline-block;
  line-height: 65px;
  margin: 5px;
}

#nav ul li a {
  font-weight: bold;
  border-radius: 4px;
  padding: 7px 13px;
  font-size: 20px;
  color: whitesmoke;
  text-decoration: none;
  text-transform: uppercase;
}

a.active,
a:hover {
  transition: 0.6s;
  background: #040504;
}

@media (max-width: 952px) {
  label.name {
    font-size: 30px;
    padding-left: 15px;
  }
  #nav ul li a {
    font-size: 16px;
  }
}

@media (max-width: 730px) {
  
label.name {
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
</style>
