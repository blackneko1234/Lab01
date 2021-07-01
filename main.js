const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            description: 'This is Shoes(?)',
            image: './assets/images/socks_green.jpg',
            link: 'https://www.camt.cmu.ac.th',
            inStock: true,
            inventory: 10,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
                { id: "LnwZa007-1", Text: 'S ' },
                { id: "LnwZa007-2", Text: 'M ' },
                { id: "LnwZa007-3", Text: 'L ' },
            ],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            if (this.inventory > 0 && this.cart >= 0) {
                this.cart += 1
                this.inventory -= 1
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            if (this.inventory >= 0 && this.cart > 0) {
                this.cart -= 1
                this.inventory += 1
            }
        }
    }
})