const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generate = require("@babel/generator").default;
const beautify = require("js-beautify");
const {
    readFileSync,
    writeFile
} = require("fs");

const visitors = require('./transformators/index')

const stringDecodeNames = {
    main: {
        wordArray: 'a1_0x28ab', // The function that returns the word array
        decodeFunc: 'a1_0xef36'
    }
};

/* Deobfuscate */
function deobfuscate(source) {
    const ast = parser.parse(source);

    traverse(ast, visitors.stringDeconcealing1)
    traverse(ast, visitors.hexDigitsToDecimal)
    traverse(ast, visitors.removeVars)
    traverse(ast, visitors.removeDuplicateVars)
    // traverse(ast, visitors.removeConstants) // Not sure if this is really useful

    /* Display code */
    let deobfCode = generate(ast, {
        comments: false
    }).code;

    deobfCode = beautify(deobfCode, {
        indent_size: 4,
        space_in_empty_paren: true,
    });
    // Output the deobfuscated result
    writeCodeToFile(deobfCode);
}

function writeCodeToFile(code) {
    let outputPath = __dirname + "/../files/output.js";
    writeFile(outputPath, code, (err) => {
        if (err) {
            console.log("Error writing file", err);
        } else {
            console.log(`Wrote file to ${outputPath}`);
        }
    });
}

deobfuscate(readFileSync("./files/reese_source.js", "utf8"));