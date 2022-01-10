const fs = require('fs')
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const LENGTH = 5

const data = fs.readFileSync("./dict.txt", "utf8")
const words = data.split("\n")
const dic = new Map()
for (const raw of words) {
    const word = raw.replace("\n", "").toUpperCase()
    if (word.length === 5) {
        dic.set(word, word)
    }
}
console.log(`Dictionary of ${dic.size} words of ${LENGTH} letters`)

rl.on('close', function () {
    console.log('\nBYE BYE !!!');
    process.exit(0);
});

const search = () => {
    console.log("\n* : unknown")
    console.log("Letter : letter at good place")
    console.log("letter+ : lettre not at right place\n")
    rl.question("Input : >", input => {
        parse(input)
    })
}

const parse = (input) => {
    const res = new Map(dic)
    let realIndex = 0
    for (let index = 0; index < input.length; index++) {
        if (input[index] !== "+") {
            const isLetter = input[index] && index < input.length && input[index + 1] !== '+'
            const isLetterPlus = input[index] && index < input.length && input[index + 1] === '+'
            const letter = input[index].toUpperCase()
            const isStar = letter === "*"

            if (!isStar) {
                if (isLetter) {
                    for (const word of dic.values()) {
                        if (word[realIndex] !== letter) {
                            res.delete(word)
                        }
                    }
                }
                if (isLetterPlus) {
                    for (const word of dic.values()) {
                        if (!word.includes(letter)) {
                            res.delete(word)
                        }
                    }
                }
            }
            realIndex++
        }
    }
    console.log("Words possibles :")
    for (const val of res.values()) {
        console.log(val)
    }
    console.log(`${res.size} results`)
    search()
}

search()
