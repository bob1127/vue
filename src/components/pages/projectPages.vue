<template lang="pug">
  section.productList
    .container 
      .row
        .col-md-4
          ul 各縣市農場(莊園)
            li 北部
            li 中部
            li 南部
            li 東部

          ul 活動方案
            li 兩天一夜深度體驗
            li 專業導遊導覽體驗
            li 三合一套裝方案
            li 豪華行程方案
          ul 各項服務 
            li 有機蔬果運送
            li 專車接駁
            li 產銷合作
            li 其他
        .col-md-8
          input(v-model="location")
          .items(v-for="roomList in roomLists" v-if="roomList.City == location")
            .item_page
              img(:src="roomList.Photo")  
            .item_description
              .topText
                .like
                  .btn 立即確認
                  font-awesome-icon#like(:icon="['fa','heart']") 
                h4(style="font-size:2vh") {{roomList.Name}} 
                h5(style="font-size:1.5vh") {{roomList.Address}}
                .info
                  font-awesome-icon#icon(icon="phone-volume" )
                  p.mt-1.ml-3 {{roomList.Tel}}
                .info  
                  font-awesome-icon#icon(icon="compass") 
                  p.mt-1.ml-3 {{roomList.City}}
                
</template>

<script>

 


export default {
   
   name: "productPages",
   active: true,
   data(){
    
     return{
       
       location: "您所在縣市",       

       roomLists: [],
       
       city:[]
       
     };
   },
   mounted(){
      this.axios.get('/WebApi').then((res)=>{
        this.roomLists = res.data;
        console.log(this.roomLists)
      });

      alert(roomList.City)
     
 
   },
   computed: {
    filterRegion: function() {
      return this.roomLists.filter(function(roomList) {
        return roomList.City = "臺中市";
      });
    },
    totalPrice(){
        return this.city
        .map(roomLists=>roomList.City)
       
    },

    toggleActive: function() {
    this.active = !this.active;
    }
  },

   
}
</script>

<style  lang="sass">
  @mixin center
    display: flex
    justify-content: center
    align-items: center 
    flex-wrap: wrap
    
  *
    margin: 0px
    padding: 0px
    list-style: none
    box-sizing: border-box
  section.productList .items
    height: 20vh
    margin-top: 30px
    overflow: hidden
    border-radius: 10px
    width: 100%
    display: flex
    transition: 0.8s
    box-shadow: 10px 10px 15px #333
  section.productList .items:hover
    transform: translate(-5px,-5px)  
  section.productList .item_page
    width: 40%
  section.productList img
    height: 100%
    width: 100%
    object-fit: cover
 
  section.productList #like 
    margin-left: 200px
    font-size: 24px
    color: rgba(0, 0, 0, .5)
    transition: 0.4s 
  section.productList #like:hover
    cursor: pointer
    color: red
     
  section.productList .text
    height: 50px
    +center
    background-color: #67BFA2
  section.productList .text p
    color: white  
    font-weight: 900
    font-size: 24px
  section.productList .item_description
    background-color: white
    width: 60%  
  section.productList .topText
    padding: 12px 35px
    display: flex
    flex-direction: column
  section.productList .topText .btn
    width: 100px
    padding: 5px 8px
    border-radius: 15px
    margin-bottom: 10px
    border: none
    background-color: #ffce00
    color: white
    font-weight: 900
    font-size: 0.2em
  section.productList .topText .btn:hover
    cursor: pointer  
  #icon
    font-size: 18px
    margin: 10px 0px
  section.productList .info 
    display: flex
  section.productList input
    width: 50%
</style>
