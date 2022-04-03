
function Enemy (name,level,hp,def,atk){
  this.name = name
  this.level = level
  this.hp = Math.round(hp * this.level * 0.75)
  this.def = Math.round(def * this.level * 0.30)
  this.atk = Math.round(atk * this.level * 0.4)
}

function monsterTypeSkeleton (name,level,hp,def,atk) {
  Enemy.apply(this, [name, level, hp, def, atk])
  this.def *= 1.4
}

function monsterTypeZombie (name,level,hp,def,atk) {
  Enemy.apply(this, [name, level, hp, def, atk])
}

function monsterTypeDragon (name,level,hp,def,atk,specialAtk) {
  Enemy.apply(this, [name, level, hp, def, atk])
  this.hp *= 0.8
  this.def *= 0.8
  this.atk *= 0.8
  this.specialAtk = this.atk * 1.8
}

const test = () => {
  const a = 10
  const b = 20
  const result = Math.random() * b - a
  return result
}




const monsterZombie = new monsterTypeZombie('zombie', 20, 10, 16, 20)
const monsterSkeleton = new monsterTypeSkeleton('skeleton', 20, 7, 14, 22)
const monsterDragon = new monsterTypeDragon('dragun', 20, 30, 35, 25, 10)

console.table(monsterZombie)
console.table(monsterSkeleton)
console.table(monsterDragon)




























