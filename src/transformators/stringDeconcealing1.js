const t = require("@babel/types");
const generate = require("@babel/generator").default;
const fs = require('fs');
const vm = require('node:vm');
const { JSDOM } = require('jsdom');

const Vistor = {
    Program(path, state) {
        const decodeNode = path.node.body[0];

        if (
            !t.isExpressionStatement(decodeNode) ||
            !t.isCallExpression(decodeNode.expression) ||
            !t.isFunctionExpression(decodeNode.expression.callee) ||
            decodeNode.expression.arguments.length != 0
        ) throw Error('Failed to find first string deconcealing function.');
        const decodeNodeProgram = t.Program(decodeNode.expression.callee.body.body);

        // Go inside of thhe first node and remove all the functions
        path.traverse(InnerVisitor);

        // Execute the function to access decoded strings later
        const dom = new JSDOM('<!DOCTYPE html>', { runScripts: 'dangerously' });
        const vmContext = dom.getInternalVMContext();
        
        // Execute all the string modifications.
        vm.runInContext(
            generate(decodeNodeProgram).code,
            vmContext
        );
        
        // Access decoded strings
        const result = vm.runInContext(
            'xM.substr(468, 9)',
            vmContext
        );

        console.log(result)
    },
}

const InnerVisitor = {
    FunctionDeclaration(path) {
        path.remove() // Check this so that output still has the funcions
    },
    AssignmentExpression(path) {
        if (
            path.node.left &&
            path.node.left.object &&
            path.node.left.object.name &&
            path.node.left.object.name === 'window'
        ) path.remove()
    }
}

export default Vistor;