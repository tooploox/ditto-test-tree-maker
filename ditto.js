const fs = require('fs');
const _ = require('lodash');
const glob = require('glob');
const path = require('path')

const README =
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
    `Generated Automatically through node script on \n${new Date()}\n` +
    'Idea is to make easier presentation for Cypress tests \n' +
    'Author: AJ \n' +
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ \n' +
    'Tree of tests - legend: \n' +
    'between ##hash## you got test spec file\n' +
    '\'--\' describe of test  \n' +
    '\'----\' context  \n' +
    '\'------>\' single it test \n' +
    '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ \n \n';

glob(__dirname + '/**/*.spec.{js,ts}', function (er, files) {
    if (files.length === 0) {
        throw Error(`You dont have any spec test files in this directory ${__dirname}`)
    } else {
        const stream = fs.createWriteStream(__dirname + '/testTree');
        stream.on('error', console.error);
        stream.write(README);
        files.forEach(function (file) {
            createTreeForTestFile(path.relative(__dirname, file), stream);
        });
    }
})

const createTreeForTestFile = (file, stream) => fs.readFile(__dirname + '/' + file, "utf8", function (err, data) {
    if (err) throw err;
    let allMatches = []
    const types = ['describe', 'context', 'it'];
    types.forEach(type => {
        const re = new RegExp(`(?<=${type}\\("|'|\`).*?(?=",|',|\`,)`, 'g');
        let matches = [...data.matchAll(re)];
        matches.forEach((match) => {
            allMatches.push({value: match[0], index: match.index, type})
        });
    })
    const sortedMatches = _.sortBy(allMatches, "index");

    stream.write(
        '\n###########################\n' +
        file + '\n' +
        '###########################\n'
    )
    for (let i = 0; i < sortedMatches.length; i++) {
        let supp = sortedMatches[i];
        switch (supp.type) {
            case 'describe':
                stream.write('--' + supp.value + '\n')
                break;
            case 'context':
                stream.write('----' + supp.value + '\n')
                break;
            case 'it':
                stream.write('------> ' + supp.value + '\n')
                break;
            default:
                break;
        }
    }
    stream.write('\n')
})
