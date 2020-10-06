//boolean
var isCool = true;
//number
var age = 56;
//string
var eyeColor = 'brown';
var favouriteQuote = "I am not old, I'am only " + age;
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
//object
var wizard = {
    a: 'John'
};
//null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeNumber = Size.Small;
// Any 
var whatever = 'aaaaaa';
whatever = 5;
//void
var sing = function () {
    console.log('lallalal');
};
//never type will not return something or endpoint
var error = function () {
    throw Error('oppps');
    //return 'hello';
};
var fightRobotArmy = function (robots) {
    console.log('Fight');
};
var fightRobotArmy2 = function (robots) {
    console.log('Fight');
};
var dog = {};
dog.count;
//Function
var fightRobotArmy3 = function (robots) {
    console.log('Fight');
};
var fightRobotArmy4 = function (robots) {
    console.log('Fight');
    return 5;
};
//Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAAAAAA');
lion.greet();
//Union
var confused = 5;
