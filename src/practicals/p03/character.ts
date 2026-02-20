export class Character {
    public name: string = ""
    public health: number = 100

    constructor(name: string = "", health: number) {
        this.name = name
        this.health = health
    }

    getName() {
        return this.name
    }

    getHealth() {
        return this.health
    }

    receiveDamage(damage: number = 0){
        const current = this.health
        this.health = current - damage
    }
}