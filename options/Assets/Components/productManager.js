const az = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ",
 "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const za = ["Z", "Y", "X", "V", "U", "T", "S", "R", "Q", "P", "O", "Ñ", "M", "L", "K",
"I", "H", "G", "F", "E", "D", "C", "B", "A"]

const letters = generateLetters()

function generateDiscountCodes(quantity) {
    const keyWords = ["COMMERCE", "PLATZI", "APP", "CAMERA"]
    const codes = []
    for(let i = 0; i < quantity; i++) {
        const code = `${keyWords[Math.floor(Math.random() * keyWords.length)]}` +
        `${letters[Math.floor(Math.random() * letters.length)]}`
       codes.push(code) 
    }
    return codes
}

function generateLetters() {
    let Words = []
    for(let a = 0; a < az.length; a++) {
        for(let z = 0; z < za.length; z++) {
            const letter = az[a] + za[z]
            Words.push(letter)
        }
    }
    return Words;
}

function generateProducts(quantity) {
    let products = []
    for(let i = 0; i < quantity; i++) {
        const calcproduct = i / quantity
        const calculate = Math.floor(letters.length * calcproduct)
        let product = {
            id: Math.floor(Math.random() * (10000 + calculate)),
            name: `Camera ${letters[calculate]}`,
            price: (Math.random() / (0.005 * calcproduct + 0.001) ).toFixed(2),
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            dicta quis repellendus facilis unde! In enim tempora culpa dolorum
            recusandae ipsa rem. Reiciendis et ipsum officia eius corporis sequi
            libero.`,
            discountCodes: generateDiscountCodes(2),
        }
        products.push(product)
    }
    return products;
}

function getData() {
    return generateProducts(10)
}


app.component("product-manager", {
    template: /* vue-html */ `
    <main>
        <app-product v-for="p in products" :product="p" :key="p.id"></app-product>
    </main>
    `,
    data() {
        return {
            products: getData()
        }
    }
})