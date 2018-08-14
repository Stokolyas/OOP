/* eslint-disable no-undef,no-useless-constructor,no-empty-function,sort-vars,no-console,max-len,one-var,space-in-parens,indent,indent-legacy */
class Agent {
    constructor() {}

    setAgent(products) {
        this.products = products
    }

    getAgent() {
        return this.products
    }

}

class User {
    constructor() {
        this.countProduct = Math.floor(Math.random(120) * 51) + 70;
    }

    setUser(countProduct) {
        this.countProduct = countProduct
    }

    getUser() {
        return this.countProduct
    }
}


class Generator {
    constructor() {
        this.product = Math.floor(Math.random(150) * 101) + 50;
    }

    setGenerator(product) {
        this.product = product
    }

    getGenerator() {
        return this.product
    }
}
let listAgent = [
    0,
    0,
    0
]
listGenerator = [
    0,
    0,
    0
]
for (let index = 3; index < 13; index++) {
    let generator = new Generator,
        user = new User,
        agent = new Agent
    listGenerator[index] = generator.getGenerator()
    if (generator.getGenerator() >= 100) {
        agent.setAgent(100)
        listAgent[index] = agent.getAgent()
    } else {
        agent.setAgent(generator.getGenerator())
        listAgent[index] = agent.getAgent()
    }
    let CPA = agent.getAgent() / user.getUser()
    console.log(generator.getGenerator(), user.getUser(), agent.getAgent(), listGenerator[index] + listGenerator[index - 1] + listGenerator[index - 2], listAgent[index] + listAgent[index - 1] + listAgent[index - 2], CPA)

}