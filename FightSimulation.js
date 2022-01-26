const fightersState = {}

function Fighter(name, strength, agility, vitality) { 
    fightersState[name] = 50 + (10 * vitality) + (5 * strength) + (3 * agility) // assign starting hp to state
    
    this.getName = function () {
        return name
    },
    this.getHp = function () {
        return fightersState[name] //get hp from state
    },
    this.takeDamage = function (damageAmount) {
        let defense = 10 + (5 * agility) + (3 * strength) + (vitality)
        let totalDamage = parseInt(damageAmount * (100 / (100 + defense))) 
        fightersState[name] = fightersState[name] - totalDamage
        console.log(`${name} received ${totalDamage}, ${this.getHp()} HP left`);
    },
    this.dealDamage = function (rival) {
        let damage = 10 + (5 * strength) - (3 * agility)
        rival.takeDamage(damage)
    }
}

const fighter1 = new Fighter("Player 1", 20, 0, 30)
const fighter2 = new Fighter("Player 2", 10, 10, 10)

fight(fighter1, fighter2)

function fight(fighter1, fighter2) {
    let turn = true
    while (fighter1.getHp() > 0 && fighter2.getHp() > 0) { 
        //alternate players every loop
        turn ? fighter1.dealDamage(fighter2) : fighter2.dealDamage(fighter1)
        turn = !turn
    }

    let winner = turn ? fighter2.getName() : fighter1.getName() //check winner base on who attacked last
    console.log(`The winner is ${winner}`);
}

