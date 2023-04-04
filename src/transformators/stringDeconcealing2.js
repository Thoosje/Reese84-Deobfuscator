const t = require("@babel/types");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

const vm = require('node:vm');
const { JSDOM } = require('jsdom');

const Visitor = {
    Program(path) {
        const vmAST = parser.parse(generate(path.node).code);
        
        const state = { decoderName: undefined, vmContext: undefined };
        traverse(vmAST, RemoveFunctionsVisitor, null, state)
        
        if (state === undefined) throw Error('Failed to find decoder function name.')

        // Execute the function to access decoded strings later
        const dom = new JSDOM('<!DOCTYPE html>', { runScripts: 'dangerously' });
        const vmContext = dom.getInternalVMContext();
        
        state.vmContext = vmContext;

        // Execute all the string modifications.
        vm.runInContext(
            generate(vmAST).code,
            vmContext
        );

        path.traverse(FindDecodersVisitor, state)
    }
}

// Clean the code to run into the VM
const RemoveFunctionsVisitor = {
    ExpressionStatement (path) {
        const { node } = path;

        if (
            !t.isProgram(path.parent) 
        ) return;
        
        if ( 
            node.expression.arguments &&
            node.expression.arguments.length == 2
        ) return // Filter out the expression we still need
        
        path.remove()
    },
    FunctionDeclaration (path, state) {
        const { node } = path;

        if (
            !t.isProgram(path.parent) 
        ) return;

        if (
            node.params &&
            node.params.length == 2
        ) state.decoderName = node.id.name;
    }
}

const FindDecodersVisitor = {
    CallExpression (path, state) {
        const { node } = path;

        if (
            t.isIdentifier(node.callee) &&
            node.callee.name === state.decoderName &&
            node.arguments &&
            node.arguments.length === 1 &&
            t.isNumericLiteral(node.arguments[0])
        ) {
            const result = vm.runInContext(
                generate(node).code,
                state.vmContext
            );
            
            path.replaceWith(t.valueToNode(result));
        };
    }
}

export default Visitor;