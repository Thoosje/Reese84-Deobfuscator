const parser = require("@babel/parser");
const generate = require("@babel/generator").default;
const {
    readFileSync
} = require("fs");

const vm = require('node:vm');
const {
    JSDOM
} = require('jsdom');

function retrieveReeseProgram(source) {
    const ast = parser.parse(source);
    return generate(ast.program.body[0]).code;
};

function createContext(reese84) {
    const dom = new JSDOM('<!DOCTYPE html>', {
        runScripts: 'dangerously',
        url: "https://www.hemmings.com/",
        referrer: "https://www.google.com/",
        pretendToBeVisual: true,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
    });
    const vmContext = dom.getInternalVMContext();

    // Load helper functions
    const helperFuncs = readFileSync('./files/context.js', 'utf8')

    // Run helper funcs + interrogator to create context
    vm.runInContext(
        `${helperFuncs}\n ${reese84}`,
        vmContext
    );

    return vmContext
};

function runInterrogator(vmContext) {
    const reeseReturnError = (data) => {
        console.log(data)
        console.log('Data above is from error.')
    }

    const reeseReturnSuccess = (data) => {
        console.log(JSON.stringify(data))
        console.log('Data above is payload.')
    }

    const interrogatorInstance = vm.runInContext(
        `window.DateTimer = new DateTimer(); new window.reese84interrogator(hasher.hash, window.DateTimer, 'dGWIt1aJoRHY9Z9xwl/RWO9fCC35U9578BdMTu8hz3c=')`,
        vmContext
    );

    interrogatorInstance.interrogate(
        reeseReturnSuccess,
        reeseReturnError
    )
};

const interrogator = retrieveReeseProgram(
    readFileSync('./files/clean_reese.js', 'utf8')
)

const context = createContext(interrogator);
const result = runInterrogator(context)
