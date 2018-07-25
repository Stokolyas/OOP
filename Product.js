class agent {
    constructor() {
        }

    setAgent(products) {
        this.products = products
    }

    getAgent() {
        return this.products
    }

}

class user {
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

class generator {
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
let listAgent = [0,0,0]
listGenerator = [0,0,0]
for (let index = 3; index < 13; index++) {
    let Generator = new generator,
        User = new user,
        Agent = new agent
        listGenerator[index] = Generator.getGenerator()
    if (Generator.getGenerator() >= 100) {
        Agent.setAgent(100)
        listAgent[index] = Agent.getAgent()
    } else {
        Agent.setAgent(Generator.getGenerator())
        listAgent[index] = Agent.getAgent()
    }
    console.log(Generator.getGenerator())

    console.log(User.getUser())
    console.log(" ")
    console.log(Agent.getAgent())
    console.log(" ")
    console.log(listGenerator[index]+listGenerator[index-1]+listGenerator[index-2])
    console.log(listAgent[index]+listAgent[index-1]+listAgent[index-2])
    let CPA = Agent.getAgent()/User.getUser()
    console.log(CPA)
    console.log(" ")
}