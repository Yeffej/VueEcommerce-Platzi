app.component("cart-content", {
    template: /* vue-html */ `
    <div class="cart-content">
        <div class="cart-content__product">
            <img :src="product.img" alt="image product" />
            <span>{{product.name}} - $ {{product.price}}</span>
        </div>
    </div>
    `,
    props: ["product"],
    setup() {

    }
})