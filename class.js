///classe heroi e suas propriedades
class heroe{
	constructor(name, age, type, armor){
    	this.name = name
        this.age = age
        this.type = type
        this.armor = armor
    }
    
    // metodo da função:
    attack(){
    	console.log("The " + this.type + " named " + this.name + " and " + this.age + " years old " + "attacked using " + this.armor)
    }
}

// declarando propriedades que serao printadas atraves do metodo
let mage = new heroe ("Casius", "28", "mage", "magic")
let warrior = new heroe ("Leo", "22", "warrior", "a sword")
let monk = new heroe ("Paul", "30", "monk", "martial arts")
let ninja = new heroe ("Alex", "45", "ninja", "a shuriken")

//chamando o metodo:
mage.attack()
warrior.attack()
monk.attack()
ninja.attack()
