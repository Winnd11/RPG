class Warrior {
    constructor(firstName, warriorType, warriorSex) {
        this.firstName = firstName,
        this.warriorType = warriorType,
        this.warriorSex = warriorSex
    }

    getFullName() {
        return this.firstName
    }

    getWarriorType() {
        return this.warriorType
    }

    getWarriorSex () {
        return this.warriorSex
    }
}

class Monster extends Warrior {
    constructor(firstName) {
        super(firstName)
    }

    getFullName() {
        return this.firstName
    }
}

class Boss {
    constructor(bossName, raceSpecie) {
        this.chefName = bossName,
        this.raceSpecie = raceSpecie
    }
}
let chatlog = document.querySelector('.chat-log');
let send = document.querySelector('#send');

// let nameLocal = prompt("What's your name?");
// const setName = (name) => localStorage.setItem(nameLocal, name);
// setName(nameLocal);

// let warriorTypeLocal = prompt("What's your class?");
// const setType = (type) => localStorage.setItem(warriorTypeLocal, type);
// setType(warriorTypeLocal);

// let localSex = prompt("What's your gender")
// const setSex = (sex) => localStorage.setItem(localSex, sex)
// setSex(localSex);

// localStorage.getItem(nameLocal), localStorage.getItem(warriorTypeLocal), localStorage.getItem(localSex)

const warrior = new Warrior('Warrior');
const monster = new Monster('Monster');
const boss = new Boss('Orgy')

localStorage.setItem('localWarriorLife', 40);
console.log(localStorage.getItem('localWarriorLife'));

localStorage.setItem('localMonsterLife', 35)
console.log(localStorage.getItem('localMonsterLife'));

send.addEventListener('click', sendBtn)
function sendBtn() {
    let input = document.querySelector('input').value
    fight(input);
};

function checkLife() {
    let lifeMonster = parseInt(localStorage.getItem('localMonsterLife', 10))
    let lifeWarrior = parseInt(localStorage.getItem('localWarriorLife', 10))

    if(lifeMonster <= 0) {
        console.log(`the ${monster.getFullName()} is dead, the ${warrior.getFullName()} win!`.toUpperCase());
    }

    if (lifeWarrior <= 0) {
        console.log(`Oh no! ${warrior.getFullName()} is dead, the ${monster.getFullName()} win!`.toUpperCase());
    }
};

function fight(value) {
    let localWarriorLife = localStorage.getItem('localWarriorLife');
    let localMonsterLife = localStorage.getItem('localMonsterLife');

    demageWarrior = Math.floor(Math.random() * 12);
    demageMonster = Math.floor(Math.random() * 7);

    checkLife();
    if (parseInt(value, 10) === 1) {
        let lifeMonsterCheck = parseInt(localMonsterLife, 10)
        lifeMonsterCheck = lifeMonsterCheck - demageWarrior
        localStorage.setItem('localMonsterLife', lifeMonsterCheck);
        const text = document.createTextNode(`${warrior.getFullName()} turn! he took ${demageWarrior} now the ${monster.getFullName()} has ${localStorage.getItem('localMonsterLife')} and the ${warrior.getFullName()} has ${localStorage.getItem('localWarriorLife')}`);
        let node = document.createElement('p');
        node.appendChild(text)
        chatlog.appendChild(node)

        let lifeWarriorCheck = parseInt(localWarriorLife, 10)
        lifeWarriorCheck = lifeWarriorCheck - demageMonster
        localStorage.setItem('localWarriorLife', lifeWarriorCheck);
        const textMonster = document.createTextNode(`Now its ${monster.getFullName()} turn! he took ${demageMonster} now the ${warrior.getFullName()} has ${localStorage.getItem('localWarriorLife')} and the ${monster.getFullName()} has ${localStorage.getItem('localMonsterLife')}`); 
        let nodeMonster = document.createElement('p');
        nodeMonster.appendChild(textMonster)
        chatlog.appendChild(nodeMonster)

    }  else if (parseInt(value, 10)  === 2) {
        LifeRecovery = Math.floor(Math.random() * (4 - 1) + 1)
        let lifeMonsterCheck2 = parseInt(localWarriorLife, 10)
        lifeMonsterCheck2 = lifeMonsterCheck2 + LifeRecovery
        localStorage.setItem('localWarriorLife', lifeMonsterCheck2);
        const textLife = document.createTextNode(`potion used! now the ${warrior.getFullName()} life is ${localWarriorLife}`); 
        let nodeLife = document.createElement('p');
        nodeLife.appendChild(textLife)
        chatlog.appendChild(nodeLife)
    } else if (parseInt(value, 10)  === 3){
        const textDefense = document.createTextNode(`${warrior.getFullName()} defended himself, he took 0 demage`); 
        let nodeDefense = document.createElement('p');
        nodeDefense.appendChild(textDefense)
        chatlog.appendChild(nodeDefense)
    } else {
        alert('invalid command')
    }
}

function fight2() {
    let lifeWarrior = 35
    let lifeBoss = 45

    const raceList = ['Goblin', 'Dragon']

    const raceGenerator = () => {
    const index = Math.floor(Math.random() * raceList.length);
    console.log(raceList[index])
    };
};
