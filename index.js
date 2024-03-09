#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow('Welcome to the game!\n');

    await sleep();
    rainbowTitle.stop();

    console.log(`
        ${chalk.bgBlue('HOW TO PLAY')}
        I'm a process on your computer.
        If you get any questions wrong, I will ${chalk.red('terminate')} myself.
    `);
}

async function getPlayerName() {
    const answer = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });

    playerName = answer.name;
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({
            text: `Nice work ${playerName}. That's the right answer`,
        });
    } else {
        spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
        process.exit(1);
    }
}

function winner() {
    console.clear();
    figlet(`Congrats , ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`, (err, data) => {
        console.log(gradient.pastel.multiline(data) + '\n');

        console.log(
            chalk.green(
                `Programming isn't about what you know; it's about making the command line look cool`
            )
        );
        process.exit(0);
    });
}

async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message:
            'Which engine manufacturer has supplied the most winning power units in F1 history (excluding the pre-2014 era)\n',
        choices: ['Mercedes', 'Renault', 'Ferrari', 'Honda'],
    });

    return handleAnswer(answers.question_1 === 'Mercedes');
}

async function question2() {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message:
            'Who holds the record for the youngest driver ever to win a Formula One race\n',
        choices: [
            'Sebastian Vettel',
            'Max Verstappen',
            'Charles Leclerc',
            'Fernando Alonso',
        ],
    });
    return handleAnswer(answers.question_2 === 'Max Verstappen');
}

async function question3() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: `In 2011, a regulation change mandated a single-spec tire supplier. Which company currently holds that exclusive contract?0\n`,
        choices: ['Pirelli', 'Michelin', 'Bridgestone', 'Goodyear'],
    });

    return handleAnswer(answers.question_3 === 'Pirelli');
}

async function question4() {
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message:
            "What innovative safety feature was introduced in 2018 to protect drivers' heads in the event of a crash?\n",
        choices: ['DRS', 'Biometric Headset', 'Halo', 'HANS device'],
    });
    return handleAnswer(answers.question_4 === 'Halo');
}

async function question5() {
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message:
            'Pick a driver who achieved multiple podium finishes without ever winning a race',
        choices: [
            'Valtteri Bottas',
            'Sergio Perez',
            'Daniel Ricciardo',
            'Michael Schumacher',
        ],
    });

    return handleAnswer(answers.question_5 === 'Valtteri Bottas');
}

async function question6() {
    const answers = await inquirer.prompt({
        name: 'question_6',
        type: 'list',
        message:
            "Which Formula One team holds the record for most consecutive Constructors' Championships?",
        choices: ['Red Bull Racing', 'McLaren', 'Mercedes', 'Ferrari'],
    });

    return handleAnswer(answers.question_6 === 'Valtteri Bottas');
}

async function question7() {
    const answers = await inquirer.prompt({
        name: 'question_7',
        type: 'list',
        message: 'How many penalty points trigger a race ban for an F1 driver?',
        choices: ['8', '10', '12', '15  '],
    });

    return handleAnswer(answers.question_7 === '10');
}

async function question8() {
    const answers = await inquirer.prompt({
        name: 'question_8',
        type: 'list',
        message:
            'Pick a driver who achieved multiple podium finishes without ever winning a race',
        choices: [
            'Valtteri Bottas',
            'Sergio Perez',
            'Daniel Ricciardo',
            'Michael Schumacher',
        ],
    });

    return handleAnswer(answers.question_8 === 'Valtteri Bottas');
}

async function question9() {
    const answers = await inquirer.prompt({
        name: 'question_9',
        type: 'list',
        message:
            'The starting lights sequence in F1 uses five red lights followed by what color before going out to signal the race start?',
        choices: ['Green', 'Yellow', 'White', 'Purple'],
    });

    return handleAnswer(answers.question_9 === 'Green');
}

async function question10() {
    const answers = await inquirer.prompt({
        name: 'question_10',
        type: 'list',
        message:
            'Nicknamed "The Temple of Speed," which legendary circuit is known for its long straights and high average speeds?',
        choices: [
            'Suzuka Circuit (Japan)',
            'Circuit de Barcelona-Catalunya (Spain)',
            'Autodromo Nazionale Monza (Italy)',
            'Circut of the Americas (USA)',
        ],
    });

    return handleAnswer(answers.question_10 === 'Autodromo Nazionale Monza (Italy)');
}

console.clear();
await welcome();
await getPlayerName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();
winner();
