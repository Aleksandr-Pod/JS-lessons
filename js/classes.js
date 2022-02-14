class Transformer{
    constructor(){
        this.lifeForm = "mech";
        this.name = "";
    }
        fire () {
            if (!this.weapon) {
                console.log("no firegun found");
                return;
            }
            console.log("I can fire !");
        }
}
class Autobot extends Transformer {
    constructor({lifeForm, life, def, att }) {
        super(lifeForm);
        this.move = "rolling";
        this.life = life;
        this.defence = def;
        this.attack = att;
    }
}

class Disepticon extends Transformer {
    constructor({lifeForm, life, def, att}) {
        super(lifeForm);
        this.move = "flying";
        this.life = life;
        this.defence = def;
        this.attack = att;   
    }
}

        /* Начало игры */
const refs = {
    autoBot: document.querySelector('.autobot'),
    desepticon: document.querySelector('.desepticon'),
    makeBot: document.querySelector('.makeBot'),
    botParams: document.querySelector('.botParams'),
    botType: document.querySelector('.botType'),
    botName: document.querySelector('.botName'),
    botHP: document.querySelector('.botHP'),
    botAttack: document.querySelector('.botAttack'),
    botDefence: document.querySelector('.botDefence')
}
let myBot = {};
let botType = "";


refs.autoBot.addEventListener('click', onAutoBot);
refs.desepticon.addEventListener('click', onDesepticon);
refs.makeBot.addEventListener('submit', onMakeBot);


function onAutoBot() {
    refs.autoBot.style = "background-color: orange";
    refs.desepticon.style = "background-color: white";
    botType = "Autobot";
}
function onDesepticon() {
    refs.desepticon.style = "background-color: orange";
    refs.autoBot.style = "background-color: white";
    botType = "Disepticon";
}

function onMakeBot(evt) {
    evt.preventDefault();
    if (!botType) return;
         // создаём бота (параметры будут рандомные)
    myBot = botType === "Autobot" ? new Autobot({ life: 100, def: 2, att: 5 }) : new Disepticon({ life: 130, def: 1, att: 6 });
    myBot.name = evt.currentTarget.elements[0].value;
    console.log(myBot);

    botInfo();

    }

function botInfo() {

    refs.botParams.classList.remove('hide');
    refs.botType.textContent = botType;
    refs.botName.textContent = myBot.name;
    refs.botHP.textContent = myBot.life;
    refs.botAttack.textContent = myBot.attack;
    refs.botDefence.textContent = myBot.defence;
}



// myBot.fire(); // стреляем без оружия

// myBot.weapon = function gun() { // приобретаем оружие
//     console.log("Fire from GUN");
// }

// myBot.fire(); // стреляем с оружием
