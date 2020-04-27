<template lang="pug">
  .container-fluid
    .row
      .col-md-12
       #msg.mt-5
         button messages
         h5 Welcome to our seesight-farm, you will get latest news 
    .row
      .col-md-6
        .img(:style="bgcss(img1)", style="height:850px")
      .col-md-6
        .row
          .col-md-12
             .img(:style="bgcss(img2)", style="height:500px")
        .row(style="margin-top: 50px")
          .col-md-6
             .img(:style="bgcss(img3)", style="height:300px")
             h3
          .col-md-6
             .img(:style="bgcss(img4)", style="height:300px")
             h3
</template>

<script>
export default {
 
  data(){
    return{
      img1: "https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      img2: "https://images.pexels.com/photos/175389/pexels-photo-175389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      img3: "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      img4: "https://images.pexels.com/photos/1675211/pexels-photo-1675211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  },
  methods:{
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

<style lang="sass">
  *
   padding: 0px
   margin: 0px
   box-sizing: border-box
   
  .img
    width: 100%
    height: 500px
 
  @mixin center
   display: flex
   justify-content: center
   align-content: center  
  #msg
     width: 100%
     height: 30px 
     display: flex
     margin-left: 100px   
  #msg button
     margin: 0px 10px
     padding: 0px 5px
     background-color: black
     color: white
     border: none
  #msg h5
     line-hight: 100%
     font-weight: 900
  .col-md-6
     position:relative   
  #cover
     width: 100%
     height: 50%
     position: absolute
     background-color: rgba(0,0 ,0 ,.4 )
     top: 10   
</style>
