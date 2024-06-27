#!/usr/bin/env node
import inquirer from "inquirer";
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 20;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
;
class enemy {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 20;
        this.fuel = fuel;
    }
}
;
let Player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "please enter your name :"
    }
]);
let Enemy = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select your enemy to fight :",
        choices: ["zombie", "Ghostfreak", "vilgax"]
    }
]);
let P1 = new player(Player.name);
let E1 = new enemy(Enemy.select);
do {
    //  -------------"zombie"--------------
    if (Enemy.select == "zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do :",
                choices: ["attack", "defence", "Med kit"]
            }
        ]);
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${E1.name} fuel is ${E1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log("you loose better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                E1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${E1.name} fuel is ${E1.fuel}`);
                if (E1.fuel <= 0) {
                    console.log("you win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Med kit") {
            P1.fuelIncrease();
            console.log(`You have boosted your health , your fuel is ${P1.fuel} now`);
        }
        if (ask.opt == "defence") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                if (P1.fuel > 0) {
                    console.log("great move you can still win this keep it up");
                    console.log(`${P1.name} fuel is ${P1.fuel}`);
                    console.log(`${E1.name} fuel is ${E1.fuel}`);
                }
                else {
                    console.log(`${P1.name} fuel is ${P1.fuel}`);
                    console.log(`${E1.name} fuel is ${E1.fuel}`);
                    console.log("you die , try again next time");
                    process.exit();
                }
            }
        }
    }
    //  -------------"Ghostfreak"--------------
    if (Enemy.select == "Ghostfreak") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do :",
                choices: ["attack", "defence", "Med kit"]
            }
        ]);
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${E1.name} fuel is ${E1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log("you loose better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                E1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${E1.name} fuel is ${E1.fuel}`);
                if (E1.fuel <= 0) {
                    console.log("you win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Med kit") {
            P1.fuelIncrease();
            console.log(`You have boosted your health , your fuel is ${P1.fuel} now`);
        }
        if (ask.opt == "defence") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                if (P1.fuel > 0) {
                    console.log("great move you can still win this keep it up");
                    console.log(`${P1.name} fuel is ${P1.fuel}`);
                    console.log(`${E1.name} fuel is ${E1.fuel}`);
                }
                else {
                    console.log(`${P1.name} fuel is ${P1.fuel}`);
                    console.log(`${E1.name} fuel is ${E1.fuel}`);
                    console.log("you die , try again next time");
                    process.exit();
                }
            }
        }
    }
    //  -------------"vilgax"--------------
    if (Enemy.select == "vilgax") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do :",
                choices: ["attack", "defence", "Med kit"]
            }
        ]);
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${E1.name} fuel is ${E1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log("you loose better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                E1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${E1.name} fuel is ${E1.fuel}`);
                if (E1.fuel <= 0) {
                    console.log("you win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Med kit") {
            P1.fuelIncrease();
            console.log(`You have boosted your health , your fuel is ${P1.fuel} now`);
        }
        if (ask.opt == "defence") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                if (P1.fuel > 0) {
                    console.log("great move you can still win this keep it up");
                    console.log(`${P1.name} fuel is ${P1.fuel}`);
                    console.log(`${E1.name} fuel is ${E1.fuel}`);
                }
                else {
                    console.log(`${P1.name} fuel is ${P1.fuel}`);
                    console.log(`${E1.name} fuel is ${E1.fuel}`);
                    console.log("you die , try again next time");
                    process.exit();
                }
            }
        }
    }
} while (true);
