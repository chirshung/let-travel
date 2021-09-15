<template>
    <div class="main-wraper">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2">
            <div class="second-title">
              <h4 class="subtitle color-dr-blue-2 underline">LỄ HỘI & SỰ KIỆN</h4>
              <h2>SINGAPORE MÙA NÀY CÓ GÌ HAY</h2>
              <p class="color-grey">Du lịch theo mùa để thoả thích trải nghiệm Singapore từ A đến Z.</p>
            </div>
          </div>
        </div>				
      </div>
      <div class="arrows bg-bluejeans">
        <div class="swiper-container main-slider-7">
                <vueper-slides                                
                  autoplay                          
                  fade :touchable="false"                   
                  :bullets-outside="false"
                  class="no-shadow"
                  :visible-slides="1"          
                  slide-multiple
                  :arrows-outside="false"
                >                                
                    
                      <vueper-slide            
                          class="swiper-slide"                            
                          v-for="(slide, i) in slides"
                          :key="i"		
                          :image="slide.image"                  
                          :title="slide.title"                  
                          :content="slide.content" />                 
                      
                          <template #arrow-left>                    
                              <div class="swiper-arrow-left sw-arrow">
                                  <span class="fa fa-angle-left"></span>
                              </div>
                          </template>

                          <template #arrow-right>                    
                              <div class="swiper-arrow-right sw-arrow">
                                  <span class="fa fa-angle-right"></span>
                              </div>
                          </template>
                  
                </vueper-slides>
          
        </div>
      </div>		
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
	data: () => ({
		slides: [
			{
				title: '',
				content: '<div style="margin-left: 500px;" class="container"><div class="row"><div class="col-xs-12 col-sm-6 col-md-5 col-md-offset-1"><div class="sl-testimonals"><div class="tour-info"><img src="/assets/img/common/calendar_icon.png" alt=""><span class="font-style-2 color-white">Aug to Sep</span></div><h3 class="color-white underline">inna, david lunoe</h3></br><img class="sl-img" src="/assets/img/demo/festival/chicken-rice.jpg" alt=""><img class="sl-img" src="/assets/img/demo/festival/chili-crab.jpg" alt=""><img class="sl-img" src="/assets/img/demo/festival/frog-rice.jpg" alt=""></div></div></div></div>',
				// You can also provide a URL for the image.                				
			},
      {
				title: '',				
				// You can also provide a URL for the image.                
				image: require('@/assets/img/demo/bg_1.jpg')
			},     
      {
        title: '',				
        // You can also provide a URL for the image.                
        image: require('@/assets/img/demo/bg_2.jpg')
      },  
		]
	}),
}
</script>

<style>
.a {  
   position: absolute; top: 0; left: 50%; right: 0; bottom: 0 ;  
}
</style>