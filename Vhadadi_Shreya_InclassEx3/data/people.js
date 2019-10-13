const axios = require('axios');

async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
    return data // this will be the array of people
}


async function getPersonById(id) {
    const data = await getPeople();
    id = parseInt(id);
    if (isNaN(id) || !(Number.isInteger(id)) || !id) {
        throw 'Id not of proper type'
    } else {
        if (id < 1 || id > data.length) {
            throw "Id out of Bounds";
        } else {
            for (i = 0; i < data.length; i++) {
                if (data[i].id === id) {
                    result = data[i].firstName + ' ' + data[i].lastName;
                }
            }
        }
        return result;
    }

}

async function lexIndex(index) {
    const data = await getPeople();
    if (isNaN(index) || !(Number.isInteger(index)) || !index) {
        throw 'Index not of proper type'
    } else {
        if (index < 0 || index >= data.length) {
            throw "Index out of Bounds";
        } else {

            data.sort((a, b) => {
                if (a.lastName > b.lastName)
                    return 1;
                else
                    return -1;
            });
            let result = data[index].firstName + ' ' + data[index].lastName;
            return result;
        }

    }
}

async function firstNameMetrics() {
    const data = await getPeople();

    let totalLetters = 0;
    var totalVowels = 0;
    var totalConsonants = 0;
    let longestName = "";
    let shortestName = data[0].firstName;


    for (let i = 0; i < data.length; i++) {
        totalLetters += data[i].firstName.length;

        for (let j = 0; j < data[i].firstName.length; j++) {
            if (data[i].firstName.charAt(j) == "a" || data[i].firstName.charAt(j) == "e" || data[i].firstName.charAt(j) == "i" || data[i].firstName.charAt(j) == "o" || data[i].firstName.charAt(j) == "u" || data[i].firstName.charAt(j) == "A" || data[i].firstName.charAt(j) == "E" || data[i].firstName.charAt(j) == "I" || data[i].firstName.charAt(j) == "O" || data[i].firstName.charAt(j) == "U") {
                totalVowels++;
            } else totalConsonants++;
        }

        if (data[i].firstName.length > longestName.length) {
            longestName = data[i].firstName;
        }

        if (data[i].firstName.length < shortestName.length) {
            shortestName = data[i].firstName;
        } else if (data[i].firstName.length == shortestName.length) {
            shortestName = data[i].firstName;
        }




    }

    let obj = { totalLetters, totalVowels, totalConsonants, longestName, shortestName };
    return obj;
}
module.exports = {
    getPeople,
    getPersonById,
    lexIndex,
    firstNameMetrics
};