app.component("app-product", {
    template: 
   /* vue-html */ `
<section class="product">
    <section class="product_display">
      <div class="product__thumbnails">
        <div v-on:click="handleThumbClick" v-for="(img, idx) in SourceImg" 
          class="thumb" :key="idx" :class="img.thumbClass">
          <img :src="img.thumbnail" alt="product thumbnail" />
        </div>
      </div>
      <div class="product__image">
        <img :src="SourceImg[productActive].src" alt="product image" />
      </div>
    </section>
    <section class="description">
      <h4>{{product.name}}</h4>
      <span class="badge new">Nuevo</span>
      <span class="badge offer">Oferta</span>
      <p class="description__status"></p>
      <p class="description__price">$ {{product.price}}</p>
      <p class="description__content">
        {{product.description}}
      </p>
      <div class="discount">
        <span>Código de descuento:</span>
        <input type="text" placeholder="Ingresa tu código" />
      </div>
    </section>
</section>
    `,
    props: {
        product: {
            type: Object,
            required: true,
            default: () => {}
        }
    },
    setup(props) {
      // con reactive() se agrupan propiedades 
      
        const SourceImg = ref([{
            src: "./Assets/images/camara.jpg",
            thumbnail: "./Assets/images/camara-thumb.jpg",
            thumbClass: "active"
          }, {
            src: "./Assets/images/camara-2.jpg",
            thumbnail: "./Assets/images/camara-2-thumb.jpg",
            thumbClass: ""
          }])
        const productActive = ref(0)

        function handleThumbClick() {
            SourceImg.value[productActive.value].thumbClass = ""
            if(productActive.value === 0) {
              productActive.value = 1
            }else {
              productActive.value = 0
            }
            SourceImg.value[productActive.value].thumbClass = "active"
          }
         
        return {
            SourceImg,
            productActive,

            handleThumbClick
        }
    }
})