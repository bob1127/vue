<template lang="pug">

  #app
   
   section.content
     
     router-view            
     .container-fluid(style="margin-top:220px")
       .row
         .col-md-6(:class="[class1]")
           img#img01(src='https://images.pexels.com/photos/1482101/pexels-photo-1482101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' style="width: 80%")
         .col-md-6(:style="{color:colorGrey}" style="font-weight:100")
           .text(:class="[class1]")
             h1.mb-5.mt-5 堅持最好的品質 
             ul
               li.fashion(v-for="fashion in fashions" style="list-style-type: disc")
                 h5 {{fashion.title}}     
                 p {{fashion.description}}
     .container-fluid(style="margin-top:220px")
       .row
         .col-md-6(:class="[class1]")
           .text(:class="[class1]" style="padding: 80px")
             h5(style="line-height:2;text-indent:2em") 農場結合珍貴農產品和天然觀光資源，四時景觀饒富趣味，適宜春季賞花、夏季避暑、秋季採果、冬季賞雪；白日觀山巒，入夜賞星空，絕妙勝景，時時引人入勝。農場最高處之天池，傳說有股天地靈氣，使得池中之水，終年不竭，極目遠眺，天池之美，山嵐風光，映入眼簾，令人流連忘返。農場內種植多種溫帶水果、高山花卉等，冠絕全台；其中之福壽長春茶，為全台灣之極品，香醇味美，喉韻無窮，廣受品茗大眾所喜愛，年年供不應求。
         .col-md-6(:style="{color:colorGrey}" style="font-weight:100")
           img#img01(src='https://images.pexels.com/photos/2383314/pexels-photo-2383314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' style="width: 80%")
     .container-fluid
       .row
         .col-md-12
           .img#shiftImg
   section.product
     .container-fluid
      .row
        .col-md-12
          img(src="https://i.postimg.cc/fW3F0B2r/nature-sky-sunny-clouds-1.jpg" )
      .row
        .col-md-12.mt-5
          .product_items
            .item(v-for="product in products")
              img#small(:src="product.imgUrl")
              h2 {{product.title}}  
              .text
                  h5(style="color:black") {{product.description_top}}
                  h4(style="color:black") {{product.description_bottom}}
                  button(style="background-color:#ffce00;color:white") Explore more
          .ml3(@click="textAnimate()" style="color: black;font-size:24px")  
    
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      msg: 'Welcome first vue app!',
      colorWhite: "#f3f3f3",
      colorGrey: "#333333",
      colorBrown: "#EBE0DB",
      colorBlue: "#2B647A",
      class1: "center",
      products:[
        {
          title: "Clothes",
          description_top: " Upto 60% + Extra 10% ",
          description_bottom: "Baggit, Zara, Fossil",
          imgUrl: "https://images.pexels.com/photos/701970/pexels-photo-701970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          title: "Pants",
          description_top: " Upto 50% ",
          description_bottom: "Zara, Selected, Celio",
          imgUrl: "https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          title: "Boots",
          description_top: " Upto 60% + Extra 10% ",
          description_bottom: "Jack & Jones, Levis",
          imgUrl: "https://images.pexels.com/photos/276245/pexels-photo-276245.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          title: "Watches",
          description_top: " Upto 60% + Extra 10% ",
          description_bottom: "Nike, Adidas, Puma",
          imgUrl: "https://images.pexels.com/photos/879797/pexels-photo-879797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
      ],
      fashions:[
        {
          title: "道德時尚（ethical fashion）：",
          description: "生產者並非血汗工廠，製程中所有勞工皆有合理的工資、工作環境及勞工人權。"
        },
        {
          title: "永續時尚（sustainable fashion）：",
          description: "注重環保，使用永續材質。製程中盡量減少用水量，避免能源浪費，解決有毒農藥及化學品等污染問題。"
        },
        {
          title: "慢時尚（slow fashion）：",
          description: "相對快時尚，不趕流行每季推出大量生產，傾向經典耐看的設計。"
        },
        {
          title: "素時尚（vegan fashion）：",
          description: "注重動物權益，商品中不使用動物成分，如皮革皮草羊毛。"
        }
      ],
      shiftImg:[
        { 
          appear: 1,
          background: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        { 
          appear: 2,
          background: "https://images.pexels.com/photos/1210484/pexels-photo-1210484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        { 
          appear: 3,
          background: "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },


      ]
    
      
    }
  },
  methods: {
   
    
  }
 
  
}

</script>

<style lang="scss">
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
  .container-fluid{
    

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
      
      height: 400px;
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
    background-attachment: fixed;
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
     background-image: url();
     
   }
   
   
  section.product .item{
    width: 20vw;
    position: relative;
    
    
  }
  section.product img{
    width: 100%;
    position: relative;
   
  }
  section.product #small{
     border-radius: 15px;
  }
  section.product .product_items{
    display: flex;
    justify-content: space-around
    
  }

  section.product h2{
    color: white;
    position: absolute;
    top: 45%;
    left: 35%;
  }
  section.product .text{
    background-color: #f3f3f3;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  section.product button{
    position: absolute;
    padding: 15px 25px;
    border: none;
    border-radius: 5px;
    opacity:0.8;
    transition: ease-out .5s;
    top: 60%;

  }
  section.product button:hover{
    cursor: pointer;
    color: #2B3D59;
    opacity: 1
  }
</style>
