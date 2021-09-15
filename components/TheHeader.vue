<template>
  <!-- <header class="color-1 hovered menu-3" :class="{scrol: scrollPosition > 100}"> -->
    <header class="color-1 hovered menu-3">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="nav"> 
                    <a href="index.html" class="logo">
                        <img src="../static/assets/img/header/logo_dark.png" alt="lets travel">
                    </a>
                    <div class="nav-menu-icon" v-on:click="toggleMenu()">
                    <a href="#" v-bind:class="{'active': isActive }" ><i></i></a>
                    </div>
                    <nav class="menu"  v-bind:class="{'slide-menu': isActive }" >
                        <ul>
                            <li class="type-1 active" v-on:click="removeMenu()">
                            <nuxt-link  to="/">Trang Chủ<span class="fa fa-angle-down"></span></nuxt-link>                          
                            </li>
                            <li class="type-1"><a href="#">Chúng Tôi<span class="fa fa-angle-down"></span></a>
                                <!-- <ul class="dropmenu">
                                    <li><a href="index_2.html">Home Hotels</a></li>
                                    <li><a href="hotel_list.html">List View</a></li>
                                    <li><a href="hotel_list_2.html">List View 2</a></li>
                                    <li><a href="hotel_grid.html">Grid View</a></li>
                                    <li><a href="hotel_block.html">Block View</a></li>
                                    <li><a href="hotel_detail.html">Hotel Details 1</a></li>
                                    <li><a href="booking.html">Booking</a></li>
                                    <li><a href="thank_you.html">Thank You</a></li>
                                </ul> -->
                            </li>
                            <li class="type-1"><a href="#">Khách Sạn<span class="fa fa-angle-down"></span></a>                            
                            </li>  
                            <li class="type-1"><a href="#">Mua Vé Nhanh<span class="fa fa-angle-down"></span></a>
                                <ul class="dropmenu">
                                    <li><a href="car_list.html">List View</a></li>
                                    <li><a href="car_grid.html">Grid View</a></li>
                                    <li><a href="car_block.html">Block View</a></li>
                                    <li><a href="car_detail.html">Detailed</a></li>
                                    <li><a href="booking.html">Booking</a></li>
                                    <li><a href="thank_you.html">Thank You</a></li>
                                </ul>
                            </li>
                            <li class="type-1" v-on:click="removeMenu()">
                                <nuxt-link to="/category"   >
                                    Vé tham quan
                                    <span class="fa fa-angle-down"></span>
                                </nuxt-link>
                                <ul class="dropmenu">
                                    <li><a href="car_list.html">List View</a></li>
                                    <li><a href="car_grid.html">Grid View</a></li>
                                </ul>
                            </li>
                            <li class="type-1">
                                <nuxt-link to="/">
                                    Khuyến Mãi
                                    <span class="fa fa-angle-down"></span>
                                </nuxt-link>                            
                            </li>
                            <li class="type-1"><a href="#">Kinh Nghiệm<span class="fa fa-angle-down"></span></a>
                                <ul class="dropmenu">
                                    <li><a href="tabs.html">Kinh Nghiệm Du Lịch</a></li>
                                    <li><a href="buttons.html">Góc Chia Sẽ</a></li>
                                    <!-- <li><a href="accordions.html">Accordions & Toggles</a></li>
                                    <li><a href="tabs.html">Tabs</a></li>
                                    <li><a href="buttons.html">Buttons</a></li>
                                    <li><a href="gallery_2.html">Image & Gallery Styles</a></li>
                                    <li><a href="gallery.html">Image Box Styles</a></li>
                                    <li>
                                    <a href="#">Listing Styles<span class="fa fa-chevron-right"></span></a>
                                        <ul class="dropmenu">
                                            <li><a href="tour_list.html">Listing Style 01</a></li>
                                            <li><a href="tour_list_2.html">Listing Style 02</a></li>							
                                            <li><a href="tour_list_3.html">Listing Style 03</a></li>							
                                            <li><a href="tour_list_4.html">Listing Style 04</a></li>									
                                        </ul>
                                    </li>
                                    <li><a href="dropdowns.html">Dropdowns</a></li>
                                    <li><a href="prices.html">Pricing Tables</a></li>
                                    <li><a href="testimonials.html">Testimonials</a></li>
                                    <li><a href="ourteam.html">Our team</a></li>
                                    <li><a href="gallerypopup.html">Gallery Popup</a></li>
                                    <li><a href="thank_you.html">Thank you</a></li> -->
                                </ul>
                            </li>
                        </ul>
                </nav>
                </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
     data() {
        return {                       
            isActive : false,       
            isRemove : true,    
            // scrollPosition: null 
        }
    },

    methods: {
        // updateScroll() {
        //     this.scrollPosition = window.scrollY
        // },

        removeMenu(){
            document.body.classList.remove('menu_opened');
            this.isActive = false ;             
            
        },
        toggleMenu(){
            if (this.isActive){                
                document.body.classList.remove('menu_opened');
            } else {
                document.body.classList.add('menu_opened');                
            }
            this.isActive = !this.isActive ;                                    
        },

    },
    // mounted() {
    //     window.addEventListener('scroll', this.updateScroll);
    // },
    // destroy() {
    //    window.removeEventListener('scroll', this.updateScroll)
    // }

}
</script>

<style>
.headCustom {
    margin-top: 100px;    
}
</style>