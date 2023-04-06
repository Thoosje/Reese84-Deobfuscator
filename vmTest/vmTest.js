const vm = require('node:vm');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path')


const code = fs.readFileSync(path.join(__dirname, 'source.js'))
const page = fs.readFileSync(path.join(__dirname, 'testPage.html'))

const dom = new JSDOM(page, { 
    runScripts: 'dangerously',
    url: "https://www.hemmings.com/",
    referrer: "https://www.hemmings.com/",
    pretendToBeVisual: true
});
const vmContext = dom.getInternalVMContext();

const fetchPkg = '../node_modules/whatwg-fetch/dist/fetch.umd.js';
dom.window.eval(fs.readFileSync(fetchPkg, 'utf-8'));

vm.runInContext(
    code,
    vmContext
);

let result = vm.runInContext(
    '(new window.reese84interrogator(window.hashesFunctions["hash"], new window.PerformanceTimer(), "dGWIt1aJoRHY9Z9xwl/RWO9fCC35U9578BdMTu8hz3c=")).interrogate(window.test, window.test)',
    vmContext
);

console.log(result)