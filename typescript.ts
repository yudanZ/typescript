//boolean
let isCool: boolean = true;

//number
let age: number = 56;

//string
let eyeColor: string = 'brown';
let favouriteQuote: string = `I am not old, I'am only ${age}`;

// Array
let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion','dragon','lizard']

//object
let wizard:object = {
    a: 'John'
}

//null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ['basketball', 5]

//Enum
enum Size { Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2];
let sizeNumber: number = Size.Small;

// Any 
let whatever: any = 'aaaaaa';
whatever = 5;

//void
let sing = ():void => {
    console.log('lallalal')
}

//never type will not return something or endpoint
let error = ():never => {
    throw Error('oppps');
    //return 'hello';
}

//interface
interface RobotArmy {
    count: number,
    type: string,
    magic?: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('Fight')
}


let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log('Fight')
}

//type assertion
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy
dog.count

//Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
    console.log('Fight')
}

let fightRobotArmy4 = (robots: RobotArmy): number => {
    console.log('Fight')
    return 5;
}

//Class
class Animal {
    private sing: string = 'lalala';
    constructor(sound: string){
        this.sing = sound
    }

    greet(): string{
        return `Hello ${this.sing}`
    }
}

let lion = new Animal('RAAAAAA');
lion.greet()




