<template>    
  <main>
    <!-- TOP BANNER -->
    <home-top-banner/>

    <!-- PREVIEWS  -->
    <home-review/>

    <!--ICON-BLOCK-->
    <home-icon-block/>    

    <!-- MIDDLE HOTEL-->
    <home-hotel/>

    <!-- MIDDLE ACTRACTION TICKETS-->
    <home-actraction-ticket/>

    <!-- GALARY-ITEM-->
    <home-galary/>

    <!-- POPULAR PRODUCT-->
    <home-promotion/>

    <!-- BOTTOM BANNER-->
    <home-bottom-banner/>

    <!-- BOTTOM BANNER-->
    <home-bottom-banner-2-slide/>

    <!-- PARTNER -->
    <home-partner/>

    <div class="container-fluid">
    </div>


  </main>
</template>

<script>
import HomeIconBlock from '../components/home/HomeIconBlock.vue'
import HomeHotel from '../components/home/HomeHotel.vue'
import HomeTopBanner from '../components/home/HomeTopBanner.vue'
import HomeReview from '../components/home/HomeReview.vue'
import HomeGalary from '../components/home/HomeGalary.vue'
import HomePromotion from '../components/home/HomePromotion.vue'
import HomeBottomBanner from '../components/home/HomeBottomBanner.vue'
import HomePartner from '../components/home/HomePartner.vue'
import HomeActractionTicket from '../components/home/HomeActractionTicket.vue'
import HomeBottomBanner2Slide from '../components/home/HomeBottomBanner2Slide.vue'



export default {
  components: { 
    // HomeTopBanner, 
    // HomeReview, 
    // HomeIconBlock, 
    // HomeHotel, 
    // HomeGalary, 
    // HomePromotion, 
    // HomeBottomBanner, 
    // HomePartner,
    // HomeActractionTicket,
    // HomeBottomBanner2Slide, 

  },
  //Declear using 'layout'
  layout: 'default',

  head: {
    link: [      
      // { rel: 'stylesheet', href: '/assets/libs/css/jquery-ui.structure.min.css'},    
      // { rel: 'stylesheet', href: '/assets/libs/css/jquery-ui.min.css'},                                    
    ],	
    // script: [  
    //   //Jquery Start
    //   {   
    //     src: "assets/libs/js/isotope.pkgd.min.js",
    //     type: "text/javascript",
    //     body: true //set this 'script' before the </body>            
    //   }, 
    //   {   
    //     src: "assets/libs/js/idangerous.swiper.min.js",
    //     type: "text/javascript",
    //     body: true //set this 'script' before the </body>            
    //   }, 
    //   {        
    //     src: "/assets/libs/js/jquery-2.1.4.min.js",
    //     type: "text/javascript",
    //     body: true //set this 'script' before the </body>
        
    //   },      
    //   {        
    //     src: "/assets/libs/js/all.js",
    //     type: "text/javascript",
    //     body: true //set this 'script' before the </body>
    //   },

      //Jquery End          
    // ]
  }
}
</script>