var generateDieBtn = document.getElementById("generate-die");
var rollDiceBtn = document.getElementById("roll-dice");
var sumDiceBtn = document.getElementById("sum-dice");
var diceContainer = document.getElementById("dice-container");
var diceArr = [];
generateDieBtn.addEventListener("click", function () { return new Die(); });
rollDiceBtn.addEventListener("click", function () {
    diceArr.forEach(function (die) {
        die.roll();
    });
});
sumDiceBtn.addEventListener("click", function () {
    var sum = 0;
    diceArr.forEach(function (die) { return sum += die.value; });
    alert(sum);
});
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.dieDiv = document.createElement('div');
        this.dieDiv.className = 'die';
        this.roll();
        diceContainer.appendChild(this.dieDiv);
        diceArr.push(this);
        this.dieDiv.addEventListener("click", function () { return _this.roll(); });
        this.dieDiv.addEventListener("dblclick", function () {
            diceContainer.removeChild(_this.dieDiv);
            diceArr.splice(diceArr.indexOf(_this), 1);
        });
    }
    Die.prototype.roll = function () {
        // generate 1-6 val and set div with that new Value
        var randomNum = Math.floor((Math.random() * 6) + 1);
        this.value = randomNum;
        this.getChar();
        this.dieDiv.innerText = this.char;
    };
    Die.prototype.getChar = function () {
        if (this.value === 1) {
            this.char = "⚀";
        }
        else if (this.value === 2) {
            this.char = "⚁";
        }
        else if (this.value === 3) {
            this.char = "⚂";
        }
        else if (this.value === 4) {
            this.char = "⚃";
        }
        else if (this.value === 5) {
            this.char = "⚄";
        }
        else {
            this.char = "⚅";
        }
    };
    return Die;
}());
