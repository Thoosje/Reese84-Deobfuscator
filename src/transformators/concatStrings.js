const babel = require('@babel/core');
const t = require('@babel/types');

const Visitor = {
    BinaryExpression(path) {
        if (path.node.operator !== '+') return;
        if (!t.isStringLiteral(path.node.left) || !t.isStringLiteral(path.node.right)) return;

        const concatenatedString = path.node.left.value + path.node.right.value;
        const newStringLiteral = t.stringLiteral(concatenatedString);
        path.replaceWith(newStringLiteral);
    }
};


export default Visitor;