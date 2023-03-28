const t = require("@babel/types");

const Visitor = {
    NumericLiteral(path) {
        if (path.node.extra && path.node.extra.raw.startsWith('0x')) {
            path.replaceWith(t.numericLiteral(path.node.value));
        }
    },
}

export default Visitor;