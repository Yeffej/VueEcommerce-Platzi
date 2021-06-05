app.component("cart-item", {
    props: {
        product: {
            required: true,
            type: Object,
            default: () => {}
        }
    },
    template: /* vue-html */ `
    <div class="cart-content__product">
        <img :src="product.img" alt="image product" />
        <span>{{product.data.name}} - $ {{product.data.price}}</span>
        <span>({{product.quantity}})</span>
    </div>
    `,
})