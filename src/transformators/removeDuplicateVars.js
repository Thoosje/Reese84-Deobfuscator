const t = require("@babel/types");
const generate = require("@babel/generator").default;

const Visitor = {
    VariableDeclarator(path) {
        const name = path.node.id.name;

        if ( t.isIdentifier(path.node.init) ) {
            if ( name === path.node.init.name ) path.remove();
        }
    }
}

export default Visitor;