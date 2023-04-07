const babel = require('@babel/core');
const t = require('@babel/types');
const generate = require('@babel/generator').default

// TODO: Check this: a + 1 gets concatonated to "" while it is not a string
const Visitor = {
    BinaryExpression(path) {
        if (path.node.operator === "+") {
            try {
                path.replaceWith(
                    t.valueToNode(eval(generate(path.node).code))
                )
            } catch (e) {} // Ignore: not a string literal
        }
    },
};


export default Visitor;