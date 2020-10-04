<template>
<div class="grid">
    <div class="container">
         <div class="box">
            <div class="content">
                <!--  -->
                <div class="profil">
                    <img class="profilpic" src="../assets/profilepic.jpg" /> 
                    <p>1° Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit?</p>
                </div>
            </div>
        </div> 
         <div class="box">
            <div class="content">
                <p>2° Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit?</p>
            </div>
        </div>
         <div class="box">
            <div class="content">
                <p>3° Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit? </p>
            </div>
        </div>
         <div class="box">
            <div class="content">
                <div class="drawpanel">
               <p >I also like to draw</p>  
           </div>
            
            </div>
        </div>
         <div class="box">
            <div class="content">
                <p>5° Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit?</p>
            </div>
        </div>
         <div class="box">
            <div class="content">
                <p>6° Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit?</p>
            </div>
        </div>
         <div class="box">
            <div class="content">
                <p>7° Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit?</p>
            </div>
        </div>
        </div>
        
    </div>
</template>

<style lang="css" scoped>

.profil{
    display: flex;
    flex-direction: row;
    place-items: center;
}
.profilpic{
    height: 150px;
    width: 150px;
    border-radius: 8px;
    margin-right: 10px;

}
.drawpanel{
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: .6s;
}
.container .box:nth-child(4):hover .drawpanel{
   
   opacity: 0;
}
/* .drawpaneltitle{
    height: 100%;
    width: 100%;
} */

.grid{
    display: flex;
    justify-content: center;
    align-self: center;
    min-height: 95vh;
    padding: 40px 40px 0px 40px;
}
.container{
    position: relative;
    max-width: 100%;
    display: grid;
    grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
    grid-template-rows: minmax(100px,auto);
    margin: 40px;
    grid-auto-flow: dense;
    grid-gap: 10px;
}
.container .box{
    
    padding: 20px;
    display: grid;
    font-size: 20px;
    place-items: center;
    text-align: center;
    transition: .6s;
    border-radius: 8px;
}
.container .box:hover{
   /* background: linear-gradient(90deg, #383838 0%, #141414 100%); */
   background: #040504;
    transform: scale(1.12);
    z-index: 1;
    
}

.container .box:nth-child(4):hover{

   background: url("../assets/city.png");
   background-size: cover;
    transform: scale(1.12);
    z-index: 1;
    
}

.container .box:nth-child(1){
    grid-column: span 2;
    grid-row: span 1;
}
.container .box:nth-child(2){
    grid-column: span 1;
    grid-row: span 1;
}
.container .box:nth-child(3){
    grid-column: span 1;
    grid-row: span 3;
}

.container .box:nth-child(4){
    grid-column: span 1;
    grid-row: span 2;
}
.container .box:nth-child(5){
    grid-column: span 1;
    grid-row: span 1;
}
.container .box:nth-child(6){
    grid-column: span 1;
    grid-row: span 2;
}
.container .box:nth-child(7){
    grid-column: span 1;
    grid-row: span 1;
}

@media (max-width: 991px) {
    .container{
    
    grid-template-columns:repeat(auto-fill,minmax(50%,1fr));
    grid-template-rows: minmax(auto,auto);
 
}
.container .box{
    grid-column: unset !important;
    grid-row: unset !important;
}
    
}
</style>