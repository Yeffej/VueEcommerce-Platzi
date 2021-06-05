const app = Vue.createApp({
    data() {
        return {
            Cart: {
                quantity: 0,
                products: [],
                Visibility: false
            },
            
        }
    },

    methods: {
        handleSendToCart(product) {
            const idxProduct = this.Cart.products.findIndex(p=> {
              return p.data.id === product.data.id
            })

            if(idxProduct >= 0) {
                this.Cart.products[idxProduct].quantity += 1
            }else {
                this.Cart.products.push(product)
            }

            this.Cart.quantity++;
        },
        ToggleCart() {
            if(this.Cart.Visibility) {
                this.Cart.Visibility = false
                return;
            }
            this.Cart.Visibility = true
        }
    },
})

