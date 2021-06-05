const {ref, reactive, toRef} = Vue

const app = Vue.createApp({
    setup() {
        const product = ref({})
        const Cart = ref({
                quantity: 0,
                products: [],
            })
        const images = ref([
            {main: "./Assets/images/camera.jpg", thumbnail: "./Assets/images/camera-thumb.jpg"},
            {main: "./Assets/images/camera-2.jpg", thumbnail: "./Assets/images/camera-2-thumb.jpg"}
        ])

        return {
            product, 
            Cart, 
            images
        }
    } 
})