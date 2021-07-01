const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            description: 'This is boots',
            image: './assets/images/socks_green.jpg',
            link: 'https://www.camt.cmu.ac.th',
            inStock: true,
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: [
                { id: 1234, Text: 'S ' },
                { id: 1235, Text: 'M ' },
                { id: 1236, Text: 'L ' },
            ]
        }
    }
})