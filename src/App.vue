<template lang="pug">

  #app
   
   section.header(style="height: 120px")
     .container-fluid
       .row
         .col-md-12
           .header
             h5 LOGO
             ul#nav
               router-link#li(to="/about") ABOUT 
               router-link#li(to="/project") PROJECT
               router-link#li(to="/news") NEWS
               router-link#li(to="/sales") SALES
               router-link#li(to="/home") HOME
   section.content
     .container-fluid
       .row
         .col-md-12
           .bgc_title
             .title(v-anime="{scale:1.5, duration:280000}")
               .title_text(:style="{color:colorWhite}")
                 h1 Duncan Manor
                 h3 鄧肯莊園
                 h3(style="display: none") 起源於1985，致力於觀光農場和農產品轉型、近期也和各地觀光所合作開發更多具有創意的產品
                 
   transition(name="view")              
     router-view            
   
   section.footer
     .left
       .contact
         h3 CONTACT INFORMATION
         ur 
          li
            font-awesome-icon#icon(:icon="['fa','map-signs']")
            .address
              h5 ADDRESS
              p 台中市新社區協中街125號
          li
            font-awesome-icon#icon(icon="phone-volume" )
            .phone
              h5 PHONE
              p (04)-0000-0000
          li
            font-awesome-icon#icon(:icon="['fa','envelope-open']")
            .email
              h5 EMAIL
              p xxxxxx@gmail.com
          li
            font-awesome-icon#icon(:icon="['fa','clock']")
            .work
              h5 WORKING DAYS/HOURS
              p Mon-Sun / 9:00AM - 8:00PM
     .right  
      .top
       .account
         ul 
           h5 MY ACCOUNT
           li 關於我們
           li 聯絡我們
           li 我的帳戶
           li 進階搜尋
       .feature
         ul 
           h5 MAIN FEATURE
           li 貼心的服務
           li 有機天然的產品
           li 優良的配送系統
           li 高素質的服務團隊
           
       .know  
         h5 BE THE FIRST TO KNOW
         .txt
           p 第一次認識我們嗎?? 請告知我們您的需求與意見
           p 您的意見、是我們繼續成長的動力
         .search
          input#exampleInputEmail1.form-control(type='email' aria-describedby='emailHelp' placeholder='Enter email')
          button.btn.btn-primary(type='submit') Submit   
      hr(style="background-color:white;width: 80%")  
      
      .bottom  
       .pay
         img(:style="bgcss(img1)")
         img(:style="bgcss(img2)")
         img(:style="bgcss(img3)")
         img(:style="bgcss(img4)")
       .history  
         p Copyright © 1995-2012 SAMSUNG All rights reserved.
    
           
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      cart: [],
      msg: 'Welcome first vue app!',
      colorWhite: "#f3f3f3",
      colorGrey: "#333333",
      colorBrown: "#EBE0DB",
      colorBlue: "#2B647A",
      class1: "center", 
      img1: "https://i.postimg.cc/0Q4qL7Pm/b.png",
      img2: "https://i.postimg.cc/yYjWbr2S/e.png",
      img3: "https://i.postimg.cc/MZDW6f5C/a.png",
      img4: "https://i.postimg.cc/gJKP21VV/d.png" 
    }
  },
  methods: {
   addcart(product){
         this.cart.push(product)
   },
   bgcss(url){
      return {
        "background-image": "url("+url+")",
        "background-position": "center center",
        "background-repeat": "no-repeat",
        "background-size": "cover"
      }
   } 
    
  }
 
  
}

</script>

<style  lang="scss">
  @import "~bootstrap/scss/bootstrap";

  #app {
    font-family: '微軟正黑體';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    box-sizing: border-box;
  }
  * {
      padding: 0px;
      margin: 0px;
      list-style: none;
      box-sizing: border-box;     
  }
  a{
    text-decoration: none;
  }
  .router-link-active{
    text-decoration: none;
  }
  a.router-link-exact-active{
    color: white;
    text-decoration: none;
    border: none
  }
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  body,html {
    height: 100%;
    background-color: #f3f3f3; 
    font-size: 100%
  }

  .header {
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #f3f3f3;
      position: fixed;
      transition: top 1.5s ease-in-out;
      top: 0;
      left: 0;
      width: 100%;
     

  }

  section.header {
      z-index: 1; 
  }

  section.header h5 {
      font-size: 50px;
      width: 50%;
  }

  section.header ul {
      display: flex;
      width: 50%;
      justify-content: space-around;
      

  }

  section.header #li {
      padding: 20px;
      transition: .8s ease-in-out;
      position: relative;
      overflow: hidden;
  }
  section.header #li:hover{
      cursor: pointer;
  }
  section.header #li::before{
      content:"";
      display:block;
      width: 130px;
      height: 5px;
      position: absolute;
      bottom:0;
      left:-130px;
      background-color: #f3f3f3;
      opacity: 1;
      transition: .9s ease-in-out;
      
      
  }

  section.header #li:hover::before {
      
      opacity:1;
      left:15px;
      
  }

  .hide {
      top: -400px
  }
  section.content .bgc_title{
    margin-left: -15px;
    margin-right: -15px;
    height: 75vh;
    overflow: hidden;
  }
  section.content .title{
    width: 100%;
    height: 75vh;
    background-image: url(https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
    background-size: cover;
    background-position: bottom center;
   border: solid 1px black;
    z-index: 1;
    overflow: hidden;
  }
  section.content .title::before{
    content: "";
    display: block;
    background-color: black;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 75vh;
    opacity: 0.2;
    background-attachment: fixed;
    
    
  }
   section.content .title_text{
     z-index: 2;
     position: absolute;
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
     height: 75vh;
     flex-direction: column;
    
   }
   section.content #shiftImg{
     
     height: 500px;

     
   }
   section.footer{
     width: 100%;
     background-color: #272723;
     color: white;
     display: flex;
     padding: 10px;
     margin-top: 100px
   }
   section.footer .contact  li{
 
     border-top: solid 1px rgba(255,255,255,0.3);
     display: flex;
     height: 100%;
     align-items: center;

   }
   section.footer .contact{
     width: 60%;
     padding: 30px;
   }
   section.footer .contact h5{
     font-size: 15px;
     font-weight: 900;
   }
   section.footer .contact p{
     font-size: 14px;
     font-weight: normal
   }
   section.footer .contact #icon{
     font-size: 28px;
   }
   section.footer .contact .address,.phone,.email,.work{
     margin-left: 30px;
     height: 100%;
     margin-top: 20px
     
     
   }
   section.footer .account,.feature,.know{

     width: 250px;
   }
   section.footer .left{
     width: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
   }
   section.footer .right{
     width: 50%;
     display: flex;
     justify-content: center;
     align-items: left;
     flex-direction: column;
     
   }
   section.footer .right li{
     position: relative;
     margin-top: 15px;
     transition: 0.5s
   }
   section.footer .right li:hover{
     cursor: pointer;
     color: #ffce00
   }
   section.footer .right li::before{
     content: "";
     position: absolute;
     display: block;
     width: 8px;
     height: 8px;
     border: solid 2px white;
     border-bottom: none;
     border-left: none;
     left: -14px;
     top: 9px;
     transform: rotate(45deg)
   }
   section.footer .search{
     display: flex;
     width: 160%;
   }
   section.footer .top{
     width: 100%;
     display: flex;
     height: 300px;
 
   }
    section.footer .bottom{
      display: flex;
    }
   section.footer .pay img{
     width: 70px;
     height: 40px;
     border-radius: 10px;
     border: solid 3px #272723;
     overflow: hidden;
     padding: 20px;
   }
   section.footer p{
     color: #f3f3f3
   }
   #nav a{
     color: white;
     text-decoration: none;
     font-size: 20px;
   }
   #nav a.router-link-exact-active{
     color: #ffce00;
     font-weight: 900;
   
   }
   #cart{
     font-size: 28px;
   }
   .view-leave-active{
     transition: opacity 1.9s ease-in-out, transform 1.9s ease 
   }
   .view-enter-active{
     transition: 1.9s 
   }
   .view-enter, .view-leave-to{
     opacity: 0;
   }
   .view-enter-to, .view-leave{
     opacity: 1;
   }
</style>
