const generateDieBtn = <HTMLButtonElement>document.getElementById("generate-die");
const rollDiceBtn = <HTMLButtonElement>document.getElementById("roll-dice");
const sumDiceBtn = <HTMLButtonElement>document.getElementById("sum-dice");
const diceContainer = <HTMLDivElement>document.getElementById("dice-container");
let diceArr: Die[] = [];

generateDieBtn.addEventListener("click", () => new Die());

rollDiceBtn.addEventListener("click", () => {
    diceArr.forEach(die => {
        die.roll();
    });
});

sumDiceBtn.addEventListener("click", () => {
    let sum = 0;
    diceArr.forEach(die => sum += die.value);
    alert(sum);
});

class Die {
    dieDiv: HTMLDivElement;
    value!: number;
    char!: string;

    constructor() {
        this.dieDiv = document.createElement('div');
        this.dieDiv.className = 'die';
        this.roll();
        diceContainer.appendChild(this.dieDiv);
        diceArr.push(this);
        this.dieDiv.addEventListener("click", () => this.roll());
        this.dieDiv.addEventListener("dblclick", () => {
            diceContainer.removeChild(this.dieDiv);
            diceArr.splice(diceArr.indexOf(this), 1);
        });
    }

    roll() {
        // generate 1-6 val and set div with that new Value
        const randomNum: number = Math.floor((Math.random() * 6) + 1);
        this.value = randomNum;
        this.getChar();
        this.dieDiv.innerText = this.char;
    }

    getChar() {
        if (this.value === 1) {
            this.char = "⚀";
        } else if (this.value === 2) {
            this.char = "⚁";
        } else if (this.value === 3) {
            this.char = "⚂";
        } else if (this.value === 4) {
            this.char = "⚃";
        } else if (this.value === 5) {
            this.char = "⚄";
        } else {
            this.char = "⚅";
        }
    }
}
