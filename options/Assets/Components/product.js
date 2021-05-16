app.component("app-product", {
    props: {
        product: {
            required: true,
            type: Object,
            default: () => {}
        }
    },
    template: /* vue-html */ `
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
    data() {
        return {
            // Due to all products going to have the same images SourceImg Property is definded here
            SourceImg: [{
              src: "./Assets/images/camara.jpg",
              thumbnail: "./Assets/images/camara-thumb.jpg",
              thumbClass: "active"
            }, {
              src: "./Assets/images/camara-2.jpg",
              thumbnail: "./Assets/images/camara-2-thumb.jpg",
              thumbClass: ""
            }],
            productActive: 0,
        }
    },
    methods: {
      handleThumbClick() {
        this.SourceImg[this.productActive].thumbClass = ""
        if(this.productActive === 0) {
          this.productActive = 1
        }else {
          this.productActive = 0
        }
        this.SourceImg[this.productActive].thumbClass = "active"
      }
    },
    computed: {
      
    }
})