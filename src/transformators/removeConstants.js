const t = require("@babel/types");

const Vistor = {
    Identifier(path) {
        if ( t.isVariableDeclarator(path.parentPath.node) ) return;
        const name = path.node.name;
        const binding = path.scope.getBinding(name);

        if (binding && binding.constant) {
            const node = binding.path.node;

            if (t.isVariableDeclarator(node)) {
                if ( t.isNumericLiteral(node.init) || t.isStringLiteral(node.init) ) {
                    const value = node.init.value;
                    path.replaceWith(t.valueToNode(value));
                };
            }
        }
    }
}

export default Vistor;