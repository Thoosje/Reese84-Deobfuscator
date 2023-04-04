const babel = require('@babel/core');
const t = require('@babel/types');

// TODO: Check this: a + 1 gets concatonated to "" while it is not a string
const Visitor = {
    BinaryExpression(path) {
        if (path.node.operator === "+") {
            const expressions = [];

            const addStringLiteral = (node) => {
                if (t.isStringLiteral(node)) {
                    expressions.push(node.value);
                } else if (t.isBinaryExpression(node) && node.operator === "+") {
                    addStringLiteral(node.left);
                    addStringLiteral(node.right);
                }
            };

            addStringLiteral(path.node.left);
            addStringLiteral(path.node.right);

            const concatenated = expressions.join("");
            const newStringLiteral = t.stringLiteral(concatenated);
            path.replaceWith(newStringLiteral);
        }
    },
};


export default Visitor;