const t = require("@babel/types");
const generate = require("@babel/generator").default;
const fs = require('fs');
const vm = require('node:vm');
const { JSDOM } = require('jsdom');

const Vistor = {
    Program(path) {
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
        
        const state = {
            vmContext
        };

        path.traverse(DecodeVistor, state)
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
};

const DecodeVistor = {
    CallExpression(path, state) {
        const { node } = path;

        if ( !node.callee ||
            !t.isMemberExpression(node.callee) ||
            !node.callee.property ||
            !t.isIdentifier(node.callee.property) ||
            node.callee.property.name !== 'substr' ||
            node.arguments.length !== 2
        ) return;

        const result = vm.runInContext(
            generate(node).code,
            state.vmContext
        );

        path.replaceWith(t.valueToNode(result))
    }
};

export default Vistor;