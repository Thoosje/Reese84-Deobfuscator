const t = require("@babel/types");
const generate = require("@babel/generator").default;

const Vistor = {
    Identifier(path) {
        const name = path.node.name;
        const binding = path.scope.getBinding(name);

        if (binding && binding.path.isVariableDeclarator()) {
            const init = binding.path.get('init');
            if (init.isIdentifier()) {
                console.log(init.node.name)
                path.node.name = init.node.name;
            }
        }
    },
}

export default Vistor;