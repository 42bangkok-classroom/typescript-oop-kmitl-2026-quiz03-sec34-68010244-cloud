
import { Character } from "./character";

export class Warrior extends Character {
  public weapon: string = ""
  
  constructor(name: string, weapon: string, health: number = 100) {
    super(name, health);
    this.weapon = weapon;
  }

  getWeapon(){
    return this.weapon
  }

  receiveDamage(damage: number = 0) {
    let current = this.health
        this.health = current - (damage - damage*0.1) //percent
  }
}