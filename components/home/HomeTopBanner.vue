<template>

    <div class="top-baner">            
	    <div class="arrows">            
            <div class="swiper-container main-slider-6">                                                                                       
                            <vueper-slides                                                                 
                                fade :touchable="false" 
                                fixed-height="666px"   
                                autoplay                               
                                >                                

                                <vueper-slide                                                                                                      
                                    v-for="(slide, i) in slides"
                                    :key="i"		
                                    :image="slide.image" 
                                    :title="slide.title"
                                    :content="slide.content"                                    
                                >                                                 
                                    <!-- 
                                     
                                    :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
                                    -->                                                                    

                                    <template #arrow-left>                    
                                        <div class="swiper-arrow-left sw-arrow">
                                            <div class="vueperslide__title">
                                                <span class="fa fa-angle-left"></span>
                                            </div>
                                        </div>
                                    </template>                                                   		

                                    <template #arrow-right>                    
                                        <div class="swiper-arrow-right sw-arrow">
                                            <span class="fa fa-angle-right"></span>
                                        </div>
                                    </template>                 

                                    <!-- <template #content>                                                                                
                                        <div class="vertical-align">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                                                        <div class="main-title style-3 left">
                                                            <h4 class="category color-white-light">best offer</h4>
                                                            <h1><span class="color-sea">-20% off</span><br>
                                                            sea tours only<br>
                                                            this month</h1>
                                                            <p class="color-white-light">Curabitur nunc erat, consequat in erat ut, congue bibendum nulla. Suspendisse id pharetra lacus, et hendrerit mi quis leo elementum. Lorem ipsum dolor sit.</p>
                                                            <div class="clearfix"></div>
                                                            <a href="#" class="c-button b-60 bg-sea hv-sea-o delay-2"><span>view more</span></a>
                                                        </div>  	  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </template> -->

                                </vueper-slide>
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
				// title: 'Promotion',				
                content: '<div class="vertical-align"><div class="container"><div class="row"><div class="col-xs-12 col-sm-10 col-sm-offset-1"><div class="main-title style-3 left"><h1><span class="color-sea">-20% off</span><br>sea tours only<br>this month</h1><p class="color-white-light">Curabitur nunc erat, consequat in erat ut, congue bibendum nulla. Suspendisse id pharetra lacus, et hendrerit mi quis leo elementum. Lorem ipsum dolor sit.</p><div class="clearfix"></div><a href="https://ketnoisingapore.com/ve-tham-quan-singapore" class="c-button b-60 bg-sea hv-sea-o delay-2"><span>view more</span></a></div></div></div></div></div>',
				// You can also provide a URL for the image.
				image: require('@/assets/img/demo/slide_4.jpg')
			},
            {
				title: '<div class="vertical-align"><div class="container"><div class="row"><div class="col-xs-12 col-sm-10 col-sm-offset-1"><div class="main-title style-3 left"><h1><span class="color-sea">-20% off</span><br>sea tours only<br>this month</h1><p class="color-white-light">Curabitur nunc erat, consequat in erat ut, congue bibendum nulla. Suspendisse id pharetra lacus, et hendrerit mi quis leo elementum. Lorem ipsum dolor sit.</p><div class="clearfix"></div><a href="#" class="c-button b-60 bg-sea hv-sea-o delay-2"><span>view more</span></a></div></div></div></div></div>',	
				// content: 'Hello',
				// You can also provide a URL for the image.                
				image: require('@/assets/img/demo/slide_1.jpg')
			},
		]
	}),
}
</script>

<style>
.a {
    margin-top: auto;    
}
</style>