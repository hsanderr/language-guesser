import { franc, francAll } from 'franc';
import langs from 'langs';

// const { franc, francAll } = require('franc');
// const langs = require('langs');

const sentence = process.argv[2];
const code = franc(sentence);

console.log('Code: ' + code);
if (code === 'und') {
    console.log('Language not found');
} else {
    console.log('Best guess: ' + langs.where("3", code).name);
}