function Fighter({ name, damage, hp, strength, agility }) {
    let _name = name;
    let _damage = damage;
    let _hp = hp;
    let _strength = strength;
    let _agility = agility;

    let wins = 0;
    let losses = 0;
    const maxHp = 100;


    return {
        getName: () => _name,
        getDamage: () => _damage,
        getStrength: () => _strength,
        getAgility: () => _agility,
        getHealth: function() {
            return _hp;
        },
        dealDamage: function (damage) {
            _hp -= damage
        },
        heal: function(amount) {
            _hp += amount;
            if(_hp >= maxHp) {
                _hp = maxHp;
            }
        },
        logCombatHistory: function () {
            console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
        },
        addWin: function () {
            wins++;
        },
        addLoss: function () {
            losses++;
        },
        attack(defender) {
            const maxProbabilityAttack = 100;
            const probabilityAttackFighter = defender.getStrength() + defender.getAgility();
        const resultAttack = Math.ceil(Math.random() * Math.floor(maxProbabilityAttack)) <= probabilityAttackFighter;
            if (resultAttack) {
                defender.dealDamage(this.getDamage());
                console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
            } else {
                console.log(`${this.getName()} attack missed`);
            }
        }
    }
}

function battle(...fighters) {
    if (fighters.find(fighter => fighter.getHealth() === 0)) {
      console.log(
        `${fighters
          .find(fighter => fighter.getHealth() === 0)
          .getName()} is dead and can't fight`
      );
    } else {
      let defender = 0;
      while (fighters[defender].getHealth() > 0) {
        fighters[defender].attack(fighters[1 - defender]);
        defender = 1 - defender;
      }
      console.log(`${fighters[1 - defender].getName()} has won!`);
      fighters[1 - defender].addWin();
      fighters[defender].addLoss();
    }
  }