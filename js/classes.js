class Transformer{
    constructor(){
        this.lifeForm = "mech";
    }
}
class Autobot extends Transformer {
    constructor({lifeForm = "bio", life, def, att }) {
        super(lifeForm);
        this.move = "rolling";
        this.life = life;
        this.defence = def;
        this.attack = att
    }
}

class Disepticon extends Transformer {
    constructor({life, def, att}) {
        super(lifeForm);
        this.move = "flying";
        this.life = life;
        this.defence = def;
        this.attack = att
    }
}

const myBot = new Autobot({ life: 100, def: 2, att: 5 })
console.log(myBot)


