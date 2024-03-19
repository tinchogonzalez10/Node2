const readline = require('readline');

function question(prompt) {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(prompt, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function main() {
    try {
        const frase = await question('Ingrese la frase a traducir: ');
        const traduccion = traducirFrase(frase);
        console.log(traduccion);
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}

function traducirFrase(frase) {
    let traduccion = '';
    for (let i = 0; i < frase.length; i++) {
        const letra = frase.charAt(i);
        if ('aeiou'.includes(letra)) {
            traduccion += letra + 'p' + letra;
        } else {
            traduccion += letra;
        }
    }
    return traduccion;
}

main();
