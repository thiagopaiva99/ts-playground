const myName: string = 'Thiago';

console.log(myName); // Thiago
console.log(typeof myName); // string

const myAge: number = 20;

console.log(myAge); // 20
console.log(typeof myAge); // number

const mySkills: string[] = ['JS', 'TS'];

console.log(mySkills); // ['JS', 'TS']
console.log(typeof mySkills); // object

const myBirthDate: [string, number, number] = ['August', 6, 1999];

console.log(myBirthDate); // ['August', 6, 1999]
console.log(typeof myBirthDate); // object

enum Gender {
    Male,
    Female
}

const myGender = Gender.Male;

console.log(myGender); // 0
console.log(typeof myGender); // number

const myFunction = (): string => {
    return 'my function!';
};

console.log(myFunction()); // my function!
console.log(typeof myFunction()); // string

const sum: (number1, number2) => number = (number1: number, number2: number) => {
    return number1 + number2;
}

console.log(sum(1, 2)); // 3
console.log(typeof sum(1, 2)); // number
