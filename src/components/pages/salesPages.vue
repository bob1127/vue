<template lang="pug">
   
   section.fruits
    .container-fluid
      .row
        .col-md-12.mt-5  
          
          #mycart 
            span(style="font-size: 28px") your cart list
            .fixed-control(@click="isCartOpen =! isCartOpen")  
              font-awesome-icon#cart(:icon="['fa','shopping-cart']")
              span {{cart.length}}
              .buybox(:style="bgcss(currentfruit.imgURL)",v-if="currentfruit")
            .control(v-if="isCartOpen")      
              .close(@click="isCartOpen =! isCartOpen")
                h2(style="color: white") My ProductCart
                font-awesome-icon#circle.ml-3.mt-1(:icon="['fa','times-circle']")  
              #panel
                ul
                  li(v-for="(fruit,fid) in cart",style="list-style-type: disc")  
                    .thumbnail(:style="bgcss(fruit.imgURL)")
                    h3 {{fruit.title}}
                      .delete(@click="cart.splice(fid,1)") -
                      .price {{fruit.price}}$
                  li(v-if="cart.length == 0")
                    h3 您尚未購買任何物品!    
                hr  
                h2 {{totalPrice}}$
      .row
        .col-md-12
          .move(@wheel.prevent="wheel($event)")
            .cards
              .card(v-for="fruit in fruits")
                .cover(:style="bgcss(fruit.imgURL)")
                .right
                  h3 {{fruit.title}}
                  h5 {{fruit.price}}.NT
                  p {{fruit.description}}
                  button#btn(@click="addcart(fruit,$event)") +add to Mycart
              
     
     
      .row      
        .col-md-6
          img.farmer(src="https://i.postimg.cc/Y9TRfbXS/8-85052-shadow-clipart-cow-ternero-silueta-png.gif") 
        .col-md-6#textdes
          .bottomSquare#bot 
          
          .topSquare(:style="bgcss(img)") 

                    
                  
</template>

<script>
import { TweenMax } from "greensock"

import $ from 'jquery'
export default {
   data(){
    return{
      fruits: [],
      cart: [],
      currentfruit: null,
      isCartOpen: false,
      img: "https://i.postimg.cc/cH0Py3rs/FB0078-18-X48-Fresh-Fruit.jpg"
    }
   },
   mounted(){
        
        this.axios.get('http://localhost:3000/products').then((res)=>{
           this.fruits = res.data 
           console.log(this.fruits)
           
        })
  
        
    },
    methods:{
       bgcss(url){
           return {
               'background-image':'url('+url+')',
               'background-position':'center center',
               'background-repeat':'no-repeat',
               'background-size':'cover'
           }
       },
       wheel(evt){
         console.log(evt.deltaY)
         TweenMax.to(".cards",0.9,{
              left: "+="+evt.deltaY*2+"px"
            })
       },
       addcart(fruit,evt){
         this.currentfruit =fruit
         
         let target = evt.target
         this.$nextTick(()=>{
            TweenMax.from(".buybox",0.9,{
            left: $(evt.target).offset().left,
            top: $(evt.target).offset().top,
            opacity: 1
          })
          setTimeout(()=>{
              this.cart.push(fruit)
          },800)
         })
         
         
         console.log(evt)
       },
   
    },
    watch:{
       cart(){
         TweenMax.from("#cart",0.3,{
            scale: 0.5
         })
       }   
    },
    computed:{
      totalPrice(){
        return this.cart
        .map(fruit=>fruit.price)
        .reduce((total,p)=>total+p,0)
      }
    } 
}
</script>

<style  lang="sass">
  @mixin center
    display: flex
    justify-content: center
    align-content: center
    flex-direction: center
   
  @mixin size($w,$h:$w)
    width: $w
    height: $h  
  @mixin boxshadow
    box-shadow: 0px 5px 20px 5px rgba(black,0.4)  
  @mixin fixpos($l,$t)
    position: fixed
    left: $l
    top: $t  
  
    
    
  *
   font-family: ‘cwTeXYen’, sans-serif 
   font-weight: 900
   padding: 0px
   margin: 0px
   box-sizing: border-box
   outline: none
  //  position: relative
  html,body
   width: 100%
   height: 100%
   overflow-x: hidden
   
  .cover
    width: 200px
    height: 240px
    position: absolute
    top: -35px
    border-radius: 10px
    margin: 0px 10px 
    transition: 0.8s
    
  .move
    flex: 1
    overflow: hidden
  .cards
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    justify-content: left
    margin-right: 20vw
    margin-left: 25vw
    margin-top: 10vh
    transition: 0.8s,left 0s
    position: relative
   
  .card
    display: inline-flex
    flex-shrink: 0 //不可以壓縮元素
    position: relative
    margin: 60px
    width: 450px
    height: 220px 
    border-radius: 5px
    transition: 0.3s
    +boxshadow
    &:hover
      transform: translate(0,-10px)
      .cover
        transform: translate(0,-13px) 
  section.fruits .right
    color: #162224
    opacity: 0.7
    text-align: center
    margin-bottom: 20px
    position: absolute
    right: 15px
    top: 3%
    width: 220px
    font-size: 0.2rem
  section.fruits .right h5
    color: #162224 
  section.fruits button
    padding: 5px 10px  
    background-color: black
    color: white
    border: none
    border-radius: 10px
    outline: none
    opacity: 0.7
    transition: 0.3s
    &:hover 
      background-color: #ffce00
      cursor: pointer
      opacity: 1
  #mycart   
    width: 200px
    height: 150px 
    potition: absolute
    left: 500px
  .buybox
    +size(50px,70px)   
    background-color: blue
    left: 120px
    bottom: 90px 
    opacity: 0
    position: absolute
  .farmer
    width: 600px  
  .fixed-control
    text-align: right
  .fixed-control:hover
    transition: 0.5s
    cursor: pointer
  .control
    
    +size(100%)
    position: fixed
    left: 0
    top: 0
    background-image: linear-gradient(-130deg,rgb(0, 0, 0,)  10%,rgb(0, 0, 0, ) 70%, rgba(0,0,0,0.9) 100%)
    z-index: 10 
  .close
    display: flex
    opacity: 0.6
    width: 280px  
    background-color: transparent
    transition: 0.5s
    position: fixed
    top: 5%
    right: 55%
    &:hover
      
      opacity: 1
    #circle
      color: white
  #panel
    width: 40%
    position: fixed
    top: 10%
    left: 30% 
    color: white 
    hr  
      background-color: white
    li
      display: flex
      transition: 0.4s
      border-radius: 8px
      justify-content: center
      align-items: center
      margin: 20px
      padding: 10px 20px 
      &:hover
        transform: translate(0px,-10px)
        background-color: rgba(#333,0.5)
        cursor: pointer
      h3
        width: 100%
        display: flex
        position: relative
        padding: 20px
        font-size: 22px
        .delete
          width: 50px
          height: 27px
          background-color: #333
          opacity: 0.6
          border-radius: 30px
          +center
          margin-left: 10px
          transition: 0.6s
          &:hover
            opacity: 1
            background-color: #E82A3C
            color: black
        .price
          position: absolute
          right: 0px
  .thumbnail
    width: 50px
    height: 60px  
  section.fruits #textdes
    position: relative
  section.fruits .topSquare
    width: 950px
    height: 400px
    background-color: #2b2a29
    position: absolute
    top: 50px
    z-index: 2
    left: -100px
  section.fruits .bottomSquare
    width: 950px
    height: 400px
    background-color: #ffce00
    position: absolute
    top: 100px
    left: -150px
    z-index: 1
 
</style>
