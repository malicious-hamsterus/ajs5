
const typesChar = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type) {
    const e = [];
    try {
      if ((typeof (name) === 'string') && (name.length >= 2) && (name.length <= 10)) {
        this.name = name;
      } else throw new Error('Неверное имя персонажа');
    } catch (error) {
      e.push(error);
    }
    try {
      if (typesChar.indexOf(type) !== -1) {
        this.type = type;
      } else throw new Error('Неверный тип персонажа');
    } catch (error) {
      e.push(error);
    }
    if (e.length === 0) {
      this.health = 100;
      this.level = 1;
    }
  }

  levelUp() {
    try {
      if (this.health !== 0) {
        this.level += 1;
        this.attack = Math.round(this.attack * 12) / 10;
        this.defence = Math.round(this.defence * 12) / 10;
        this.health = 100;
      } else throw new Error('нельзя повысить левел умершего');
    } catch (error) {
      console.log(error);
    }
  }

  damage(points) {
    if ((this.health >= 0) && (points >= 0)) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
}
