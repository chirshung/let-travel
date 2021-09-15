export default {
  //Custom - Add
  mode: 'universal',

  target: 'server',

  //Custom - End

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cát Tường Travel - Ketnoisingapore - Du lịch Singapore tự túc',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],

    //Custom - Add
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/kns.jpg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800,400italic'},      
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700'},      
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900'},       
      { rel: 'stylesheet', href: '/assets/libs/css/bootstrap.min.css'},
      { rel: 'stylesheet', href: '/assets/libs/css/jquery-ui.structure.min.css'},    
      { rel: 'stylesheet', href: '/assets/libs/css/jquery-ui.min.css'},      
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'}, 
      { rel: 'stylesheet', href: '/assets/libs/css/style.css'},      
      
    ],        
   
    script: [  
      //Jquery Start
      // {        
      //   src: "/assets/libs/js/jquery-2.1.4.min.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>        
      // },
      // {        
      //   src: "/assets/libs/js/bootstrap.min.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>        
      // },
      // {   
      //   src: "assets/libs/js/jquery-ui.min.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>            
      // },
      // {   
      //   src: "assets/libs/js/idangerous.swiper.min.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>            
      // },
      // {   
      //   src: "assets/libs/js/jquery.viewportchecker.min.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>            
      // },
      // {   
      //   src: "assets/libs/js/isotope.pkgd.min.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>            
      // },         
      // {   
      //   src: "assets/libs/js/jquery.mousewheel.min.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>            
      // },                       
      // {        
      //   src: "/assets/libs/js/all.js",
      //   type: "text/javascript",
      //   body: true //set this 'script' before the </body>
      // },
    ]
    //Custom - End    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //----------------------Custom - Add----------------------------  
      // '@/assets/scss/style.scss',
      // 'swiper/css/swiper.css'
    
    '@fortawesome/fontawesome-svg-core/styles.css'

    //----------------------Custom - End----------------------------  
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //----------------------Custom - Add----------------------------
    //Add axios plugin - START
    '~/plugins/axios',    
    '~/plugins/fontawesome.js',
    //Add axios plugin - END
    //----------------------Custom - End----------------------------
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //----------------------Custom - Add----------------------------
    //Add axios modules - START
    '@nuxtjs/axios',    
    
    //Add axios modules- END
    //----------------------Custom - End----------------------------
  ],

  //----------------------Custom - Add----------------------------
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    
  },



  
  // server: {
  //   port: 8000 // default: 3000
  // },

  //Add Eviroment variable - START
  env: {
    port: process.env.PORT  || 8000
    
  }
  // Add Eviroment variable - END
  //----------------------Custom - End----------------------------
}
