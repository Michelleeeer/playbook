class pokemon {
    constructor (name){
        this.name = name 

    }
    sayHello(name){
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
      }
    
    sayMessage(msg){
        console.log(`Mi pokemon ${this.name} dice: ${msg}`)
      }
}



module.exports = pokemon 
