const t = require("@babel/types");
const generate = require("@babel/generator").default;

const Visitor = {
    Identifier(path) {
        const name = path.node.name;
        const binding = path.scope.getBinding(name);

        if (binding && binding.path.isVariableDeclarator()) {
            const init = binding.path.get('init');
            if (init.isIdentifier()) {
                if (init.node.name === 'undefined') return;
                path.node.name = init.node.name;
            }
        }
    },
}

export default Visitor;