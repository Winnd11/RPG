class Warrior {
    constructor(firstName, warriorType) {
        this.firstName = firstName,
        this.warriorType = warriorType,
        this.itensArray = ['Sword', 'Potion']
    }

    getFullName() {
        return this.firstName
    }

    getWarriorType() {
        return this.warriorType
    }

     removePotion(item) {
        let lifeWarriorRecovery = parseInt(localStorage.getItem('localWarriorLife'), 10)
        let lifeRecovery = Math.floor(Math.random() * 6)
        lifeWarriorRecovery = lifeWarriorRecovery + lifeRecovery
        localStorage.setItem('localWarriorLife', lifeWarriorRecovery)
        this.itensArray.pop(item)
        const textLife = document.createTextNode(`potion used! now the ${warrior.getFullName()} life is ${localStorage.getItem('localWarriorLife')}`); 
        let nodeLife = document.createElement('p');
        nodeLife.appendChild(textLife)
        chatlog.appendChild(nodeLife)
    }
    
    usePotion() {
        const returnItens = this.itensArray.includes('Potion')
        return returnItens ? warrior.removePotion('Potion') : console.log('potion has been used // empty'); 
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

let nameLocal = prompt("What's your name?");
const setName = (name) => localStorage.setItem(nameLocal, name);
setName(nameLocal);

let warriorTypeLocal = prompt("What's your class?");
const setType = (type) => localStorage.setItem(warriorTypeLocal, type);
setType(warriorTypeLocal);

const letter = (localName) => {
    const upper = String(localName).charAt(0).toUpperCase();
    return upper + String(localName).replace(String(localName).charAt(0), '')
} 

document.querySelector('#name-warrior').innerHTML = `Name: ${letter(nameLocal)}`;
document.querySelector('#class-warrior').innerHTML = `Class: ${letter(warriorTypeLocal)}`;

// localStorage.getItem(nameLocal), localStorage.getItem(warriorTypeLocal), localStorage.getItem(localSex)

const warrior = new Warrior(letter(nameLocal), localStorage.getItem(warriorTypeLocal));
const monster = new Monster('Monster');
const boss = new Boss('Orgy')

localStorage.setItem('localWarriorLife', 40);
console.log(localStorage.getItem('localWarriorLife'));

localStorage.setItem('localMonsterLife', 35)
console.log(localStorage.getItem('localMonsterLife'));

function checkLife() {
    let lifeMonster = parseInt(localStorage.getItem('localMonsterLife', 10))
    let lifeWarrior = parseInt(localStorage.getItem('localWarriorLife', 10))
        
    lifeMonster <= 0 ? console.log('monster dead teste') : false
    lifeWarrior <= 0 ? console.log('warrior dead teste') : false 
};

function demage(character) {
    let localWarriorLife = localStorage.getItem('localWarriorLife');
    let localMonsterLife = localStorage.getItem('localMonsterLife');

    demageWarrior = Math.floor(Math.random() * 11);
    demageMonster = Math.floor(Math.random() * 12);

    if(character === 'Warrior') {
        let lifeWarriorCheck = parseInt(localWarriorLife, 10)
        lifeWarriorCheck = lifeWarriorCheck - demageMonster
        localStorage.setItem('localWarriorLife', lifeWarriorCheck);
    }

    else if (character === 'Monster') {
        let lifeMonsterCheck = parseInt(localMonsterLife, 10)
        lifeMonsterCheck = lifeMonsterCheck - demageWarrior
        localStorage.setItem('localMonsterLife', lifeMonsterCheck);
    }
}

function randomDefense() {
    let randomDefense = Math.floor(Math.random() * 6)
    if (randomDefense >= 2) {
        demage('Warrior')
        console.log('took damage');
    } else {
        console.log('took no demage');
    } 
}

function fight(value) {
    let valueInt = parseInt(value, 10);
    if (valueInt === 1) {
        demage('Monster')
        const text = document.createTextNode(`${warrior.getFullName()} turn! he took ${demageWarrior} now the ${monster.getFullName()} has ${localStorage.getItem('localMonsterLife')} and the ${warrior.getFullName()} has ${localStorage.getItem('localWarriorLife')}`);
        let node = document.createElement('p');
        node.appendChild(text)
        chatlog.appendChild(node)

        demage('Warrior')
        const textMonster = document.createTextNode(`Now its ${monster.getFullName()} turn! he took ${demageMonster} now the ${warrior.getFullName()} has ${localStorage.getItem('localWarriorLife')} and the ${monster.getFullName()} has ${localStorage.getItem('localMonsterLife')}`); 
        let nodeMonster = document.createElement('p');
        nodeMonster.appendChild(textMonster)
        chatlog.appendChild(nodeMonster)

    }  else if (valueInt === 2) {
        warrior.usePotion();
    } else if (valueInt === 3){
        randomDefense();
    } else {
        alert('invalid command')
    }

    checkLife();
};

send.addEventListener('click', sendBtn)
function sendBtn() {
    let input = document.querySelector('input').value
    fight(input);
};

// function fight2() {
//     let lifeWarrior = 35
//     let lifeBoss = 45

//     const raceList = ['Goblin', 'Dragon']

//     const raceGenerator = () => {
//     const index = Math.floor(Math.random() * raceList.length);
//     console.log(raceList[index])
//     };
// };
