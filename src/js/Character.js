export default class Character {
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('invalid name');
        }
        if (!['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error('invalid type ' + type);
        }
        this.type = type;
        this.name = name;
        this.health = 100;
        this.level = 1;
        this.attack = null;
        this.defence = null;
      }
}