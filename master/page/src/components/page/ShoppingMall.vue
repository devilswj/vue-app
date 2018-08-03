<template>
    <div>
       <div class="search-bar">
           <van-row gutter="5"  style="margin:0">
               <van-col span="3" class="search-ico">
                   <div class="icoBox">
                       <router-link to="/register">
                           <img :src="img"  alt="" class="ico">
                       </router-link>
                        
                   </div>
               </van-col>
               <van-col span="16">
                    <input type="text" class="search-input"/>
               </van-col>
               <van-col span="5">
                   <router-link to="/Login">
                   <van-button class="search-btn" size="mini">查找</van-button>
                   </router-link>
               </van-col>
           </van-row>
       </div>

       <div class="swiper-area">
           <van-swipe width="100%" style="margin:0;height:100%"  :autoplay="1000">
               <van-swipe-item width="100%" height="100%" style="margin:0" v-for="(banner,index) in imgArr" :key="index">
                   <img  v-lazy="banner.image" alt="" width="100%" >
               </van-swipe-item>
           </van-swipe>

       </div>

       <div class="type-bar">
           <div v-for="(cate,index) in category" :key="index">
               <img :src="cate.image" alt="" width="90%"/>
               <span>{{cate.mallCategoryName}}</span>
           </div>
       </div>

        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
                        <div class="recommend-item">
                            <img :src="item.image" alt="" width="80%">
                            <div class="text">￥{{item.price}}</div>
                            <div class="line">￥{{item.mallPrice}}</div>
                        </div>
                    </swiper-slide>
                </swiper>    
            </div>
        </div>
    
        <floorComponent :floorData="floor1" :floorTitle="floorText.floor0"> </floorComponent> 
         
        <floorComponent :floorData="floor2" :floorTitle="floorText.floor1"> </floorComponent> 
        
        <floorComponent :floorData="floor3" :floorTitle="floorText.floor2"> </floorComponent> 
        
        <div class="hot-area">
            <div class="hot-title">
                    热卖商品
            </div>
            <div class="hot-goods">
                <van-list>
                    <van-row gutter="20"> 
                        <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
                          <goodsInfo :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goodsInfo>
                        </van-col>
                    </van-row>
                </van-list>
            </div>

        </div>

        

         

   </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'


import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import floorComponent from '@/components/floorComponent'
import goodsInfo from '@/components/goodsInfoComponent'


export default {
    components:{
        swiper,
        swiperSlide, 
        floorComponent,
        goodsInfo,
    },
    data(){
        return{
            img:require('../../assets/img/search.png'),
            imgArr:[
                {imgUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
                {imgUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
                {imgUrl:require('../../assets/img/banner03.jpg')}
            ],
            category:[],
            recommendGoods:[],
            swiperOption:{
                    // direction:'vertical',
                    slidesPerView:3,
                    freeMode:false,
                    pagination:{
                        el:'.swiper-pagination'
                    }
                },
            floorText:{
                floor0:'趣味小吃',
                floor1:'新鲜水果',
                floor2:'浓浓牛奶',
            },
            floor1:[],
            floor2:[],
            floor3:[],
            hotGoods:[],

           
        }
       
    },
    created(){
        axios({
          url:'https://www.easy-mock.com/mock/5b189fc771e74d2ec58b54d4/example/swj',
          method:'get'  
        }).then(response=>{
            this.floor1 = response.data.data.floor1
            this.floor2 = response.data.data.floor2
            this.floor3 = response.data.data.floor3
             this.hotGoods = response.data.data.hotGoods

            this.recommendGoods = response.data.data.recommend
            this.imgArr = response.data.data.slides
            this.category=response.data.data.category
          
        })
    }
}
</script>
<style scoped>
.search-bar{
    height: 2.5rem;
    background-color: #e5017d;
    line-height: 2.5rem;
}
.search-ico{
    margin-top: 0.03rem;
    line-height:1rem;
   
}
.icoBox{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
}
.search-btn{
    height: 1.3rem;
    width: 2.4rem;
    font-size: 0.7rem;
    margin-left: 0.8rem;
}
.search-input{
    width:100%;
    height:1.3rem;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 0.05rem solid #fff;
    background: #e5017d;
    color:#fff;
}
.ico{
    max-width:80%;
   
    padding-top:.1rem;
    padding-left: .3rem; 
}
.swiper-area{
   height: 100%;
    width:100%;
    clear:both;
}
.type-bar{
    clear: both;
    background: #fff;
    margin: 0.1rem .3rem .3rem .3rem;
    border-radius:.3rem;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap; 
    align-items: center;
    justify-content: center;
}
.type-bar div{
   width: 15%;
    padding: .5rem;
    font-size: 12px;
    text-align: center;
}
.recommend-area{
    background: #fff;
    margin-top: .3rem;
}
.recommend-title{
    border-bottom:1px solid #fff;
    font-size: 14px;
    padding: .2rem;
    color: #e5017d; 
}
.recommend-title1{
    border-bottom:1px solid #eee;
    font-size: 14px;
    padding: .2rem;
    color: #e5017d;
    text-align: center; 
}
.recommend-body{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-bottom: 1px solid #eee;
}
.recommend-item{
    width: 100%;
    border-right:1px solid #eee;
    font-size: 12px;
    text-align: center; 
}
.line{
    text-decoration: line-through;
}
.text{
    color: #f00;
}
.hot-area{
    text-align: center;
    font-size: 14px;
    height:1.8rem;
    line-height: 1.8rem;
}



</style>

