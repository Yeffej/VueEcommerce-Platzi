const app = Vue.createApp({
    data() {
        return {
            product: {},
            Cart: {
                quantity: 0,
                products: [],
            },
            images: [{main: "./Assets/images/camera.jpg", thumbnail: "./Assets/images/camera-thumb.jpg"},
            {main: "./Assets/images/camera-2.jpg", thumbnail: "./Assets/images/camera-2-thumb.jpg"}],
        }
    },

    methods: {

    },
    computed: {

    }
})

